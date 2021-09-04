// var MongoClient = require('mongodb').MongoClient;
// var co = require('co');

// MongoClient.connect('mongodb://localhost:27017/stress-test', function(err, dbref) {
//   if (!err) {
//     console.log("Mongodb connected");
//     db = dbref;
//     loadTest();
//   }
// });

// function loadTest() {
//     insertDocuments(5);

// }

// function readDocuments() {
//   co(function*() {
//     console.time('reads');
//     var documents = yield db.collection('posts').find({}, {_id : 1}).toArray();
//     console.log('Total documents ' + documents.length);
//     for (var entry in documents) {
//       var document = yield db.collection('posts').findOne({
//         _id: entry._id
//       })
//     }
//     console.timeEnd('reads');
//   }).catch(function(err) {
//     console.log(err.stack);
//   });
// }

// function insertDocuments(count) {
//   co(function*() {
//     console.time('writes');
//     for (var i = 0; i < count; i++) {
//       var r = yield db.posts.save(createDocument());
//     }
//     console.timeEnd('writes');
//   }).catch(function(err) {
//     console.log(err.stack);
//   });
// }

// function createDocument() {
//   var title = randomString(50, 200);
//   var createdDate = randomDate();
//   var modefiledDate = randomDate();
//   var authorName = randomString(5, 15);
//   var content = randomString(1500, 15000);
//   var description = randomString(100, 500);

//   var document = {
//     title: title,
//     createdDate: createdDate,
//     modefiledDate: modefiledDate,
//     author: {
//       name: authorName
//     },
//     content: content,
//     description: description
//   }
//   return document;
// }

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function randomString(minLength, maxLength) {
//   var length = randomNumber(minLength, maxLength);
//   var text = "";
//   var possible = "ABC DEFG HIJKLM NOPQRSTUV WXYZabcde fghijk lmn opqrstuvw xyz0 123 4567 8 9";
//   for (var i = 0; i < length; i++) {
//     text += possible.charAt(Math.floor(Math.random() * possible.length));
//   }
//   return text;
// }

// function randomDate() {
//   var startDate = new Date(2000, 0, 1).getTime();
//   var endDate = new Date(2017, 0, 1).getTime();
//   var spaces = (endDate - startDate);
//   var timestamp = Math.round(Math.random() * spaces);
//   timestamp += startDate;
//   return new Date(timestamp);
// }