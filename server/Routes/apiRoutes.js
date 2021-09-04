const express = require('express');
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');

// Retrieve Product ID & Related Product ID
router.get('/related', (req,res) => {

let productID = req.query._id
  //if no _id is added defaults to first item in database
  if (req.query._id === undefined) {
    productID = 1
  }

    process.on('uncaughtException', function(ex) {
      res.end('ID does not exist')
    })

  RelatedAPI.find({"_id" : productID})
    .then((pid) => {
      const relatedArrayIds = []
      pid[0].related_product_id.map(data => {
       if (!relatedArrayIds.includes(data)) {
        relatedArrayIds.push(data)
       }
      })
      res.send(relatedArrayIds);
    });
});

module.exports = router


