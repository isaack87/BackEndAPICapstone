const express = require('express');
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');

// Retrieve Product ID & Related Product ID
router.get('/related', (req,res) => {
    RelatedAPI.find({"current_product_id" : req.query.current_product_id}).limit(25)
    //console.log(req.query)
    .then((pid) => {
      const relatedArrayIds = []
      pid[0].related_product_id.map(data => {
       if (!relatedArrayIds.includes(data)) {
        relatedArrayIds.push(data)
       }
      })
      res.send(relatedArrayIds.sort());
    });
});

// Post to database
router.post('/related', (req,res) => {
  RelatedAPI.create(req.body).then((pid) => {
      res.send(pid);
  })
});


module.exports = router;

