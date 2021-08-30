const express = require('express');
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');


// Retrieve Product ID & Related Product ID
router.get('/related', (req,res) => {
    RelatedAPI.find({"current_product_id" : req.query.current_product_id}).limit(5)
    .then((pid) => {
      res.send(pid);
    });
});

// Post to database
router.post('/related', (req,res) => {
  RelatedAPI.create(req.body).then((pid) => {
      res.send(pid);
  })
});


module.exports = router;