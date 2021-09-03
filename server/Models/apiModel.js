const mongoose = require('mongoose');
const Schema = mongoose.Schema;



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
  related_product_id: {type: [Number]}
});

const RelatedAPI = mongoose.model('relatedapi1', RelatedSchema);
module.exports = RelatedAPI;


