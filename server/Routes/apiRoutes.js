const express = require('express');
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');





// POST
router.post('/related', (req,res) => {
 
    RelatedAPI.insertOne(req.body)
    .then(result => {
      console.log(result)
    })
    .catch(err => {
      console.log(err)
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
      })
  });







// GET
router.get('/related', (req,res) => {
let  = req.query._id
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
<<<<<<< HEAD
=======
      console.log(` ProductID: ${productID} returned these related ProductIDs: [${relatedArrayIds}]`)
>>>>>>> 0c1463cee6bf530d29c2af096bfb10793070bf45
    })
});





// PUT
router.put('/related', (req,res) => {
  let  = req.query._id
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
      })
  });







// DELETE
router.delete('/related', (req,res) => {
  let  = req.query._id
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
      })
  });






module.exports = router


