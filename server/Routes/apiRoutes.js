const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();
const RelatedAPI = require('../Models/apiModel.js');
const {getProductID} = require('../Helpers/helperFunctions.js')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/loaderio-434428b40cdd21f1e114a316259d4ee4', (req,res) => {
  res.json('loaderio-434428b40cdd21f1e114a316259d4ee4')
})

// CREATE FUNCTION
router.post('/related', (req,res) => {
  const id = req.query._id
  const related = req.query.related_product_id
  const type = 'post'

  getProductID(id, related, type, (err) => {
    if (err) {
      return ('post error');
    } else {
      res.send('success')
    }
  })
})


// READ FUNCTION
router.get('/related', (req,res) => {
  let  productID = req.query._id

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
router.put('/related', (req,res) => {
  const id = req.query._id
  const related = req.query.related_product_id
  const type = 'put'

  getProductID(id, related, type, (err) => {
    if (err) {
      return ('post error');
    } else {
      res.send('success')
    }
  })
});


// DELETE FUNCTION
router.delete('/related', (req,res) => {

  let productID= req.query._id
  process.on('uncaughtException', function(ex) {
    console.log('server crashing, rebooting')
  })

  RelatedAPI.deleteOne({_id: productID}, (err, result) => {
    if (result.deletedCount === 0) {
      res.end('id doesnt exist')
    }
    if (err) {
      return err
    } else {
      res.send(`ProductID: ${productID} has been deleted from database`);
    }
  })
});

module.exports = router


