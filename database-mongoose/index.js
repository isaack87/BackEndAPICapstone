const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true })

let productId = mongoose.Schema({
 id: Number,
 current_product_id: Number,
 related_product_id: { type: [Number], required: true, unique: true }
});

let relatedProductId = mongoose.model('relatedProductId', productId);;


//brew services start mongodb-community@5.0
//brew services stop mongodb-community@5.0

module.exports.relatedProductId = relatedProductId