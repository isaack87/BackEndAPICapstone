const mongoose = require('mongoose');
const axios = require('axios');
const RelatedAPI = require('../Models/apiModel.js');


let updateSave = (id, entry) => {
  const idnum = parseInt(id)
  const entryarray = JSON.parse(entry)
  const pid = { _id: id}
  const update = {_id: id, current_product_id: id, related_product_id: entryarray}
  RelatedAPI.findOneAndUpdate(pid, update, {new: true, upsert:true}, (err, result) => {
    if(err) {
      console.log('err');
    }
  })
}

let createOne = (id, entry) => {
const idnum = parseInt(id)
const entryarray = JSON.parse(entry)
const update = {_id: id, current_product_id: id, related_product_id: entryarray}
RelatedAPI.create(update)
}

let getProductID = (id, related, type, cb) => {
let options = {
  method: 'GET',
  url: `http://localhost:5000/api/related?_id=${id}`
}
axios(options)
.then(response => {
  if (type === 'put') {
    updateSave(id, related)
  }
  if (type === 'post') {
    createOne(id, related)
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


module.exports.updateSave = updateSave;
module.exports.getProductID = getProductID;
module.exports.createOne = createOne;