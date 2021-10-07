const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');
const {getProductID} = require('../Models/apiModel')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// POST

router.post('/related', (req,res) => {
  const id = req.query._id
  const related = req.query.related_product_id

  getProductID(id, related, (err) => {
    if (err) {
      return ('post error');
    } else {
      res.send('success')
    }
  })

})


router.get('/related', (req,res) => {
  let  productID = req.query._id
    //if no _id is added defaults to first item in database
    if (req.query._id === undefined) {
      productID = 1
    }
      process.on('uncaughtException', function(ex) {
        res.end('ID does not exist')
      })

    RelatedAPI.find({"_id": productID})
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













// // PUT
// router.put('/related', (req,res) => {
//   let  = req.query._id
//     //if no _id is added defaults to first item in database
//     if (req.query._id === undefined) {
//       productID = 1
//     }
//       process.on('uncaughtException', function(ex) {
//         res.end('ID does not exist')
//       })

//     RelatedAPI.find({"_id" : productID})
//       .then((pid) => {
//         const relatedArrayIds = []
//         pid[0].related_product_id.map(data => {
//          if (!relatedArrayIds.includes(data)) {
//           relatedArrayIds.push(data)
//          }
//         })
//         res.send(relatedArrayIds);
//       })
//   });







// // DELETE
// router.delete('/related', (req,res) => {
//   let  = req.query._id
//     //if no _id is added defaults to first item in database
//     if (req.query._id === undefined) {
//       productID = 1
//     }
//       process.on('uncaughtException', function(ex) {
//         res.end('ID does not exist')
//       })

//     RelatedAPI.find({"_id" : productID})
//       .then((pid) => {
//         const relatedArrayIds = []
//         pid[0].related_product_id.map(data => {
//          if (!relatedArrayIds.includes(data)) {
//           relatedArrayIds.push(data)
//          }
//         })
//         res.send(relatedArrayIds);
//       })
//   });






module.exports = router


