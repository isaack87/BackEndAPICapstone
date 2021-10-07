const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const axios = require('axios');


// ********************
// REMEMBER TO DelETE _ID: "-1", was a test entry in mongo db
//************************

//connect to my mongoDB
mongoose.connect('mongodb://localhost/relatedapi', { useNewUrlParser: true, useUnifiedTopology: true }, {})
.then(() => console.log('MongoDB Connection Successful'))
.catch(err => console.log(err));

// create RelatedSchema schema & model
const RelatedSchema = new Schema({
  _id: String,
  sequence_value: Number,
  current_product_id: {type: Number},
  related_product_id: {type: []}
});


let save = (id, entry) => {
    const idnum = parseInt(id)
    const entryarray = JSON.parse(entry)

    const pid = { _id: id}
    const update = {_id: id, current_product_id: id, related_product_id: entryarray}
    RelatedAPI.findOneAndUpdate(pid,
      update
    , {new: true, upsert:true}, (err, result) => {
      if(err) {
        console.log('err');
      }
  })
}

let getProductID = (id, related, cb) => {
  let options = {
    method: 'get',
    url: `http://localhost:5000/api/related?_id=${id}`
  }

  axios(options)
  .then(response => {
    if (response.data === 'ID does not exist') {
      save(id, related)
    }
  })
  .then ((info) => {
    cb(info)
  console.log('success')
  })
  .catch (error => {
    console.log('error')
  })
}


const RelatedAPI = mongoose.model('relatedapi1', RelatedSchema);
module.exports= RelatedAPI
module.exports.save = save;
module.exports.getProductID = getProductID;



