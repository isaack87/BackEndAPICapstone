const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connect to my mongoDB
mongoose.connect('mongodb://localhost/relatedapi', { useNewUrlParser: true, useUnifiedTopology: true }, {})
.then(() => console.log('MongoDB Connection Successful'))
.catch(err => console.log(err));


// create RelatedSchema schema & model
const RelatedSchema = new Schema({
  id: {type: Number},
  current_product_id: {type: Number},
  related_product_id: {type: [Number]}
});


const RelatedAPI = mongoose.model('transformed', RelatedSchema);
module.exports = RelatedAPI;
