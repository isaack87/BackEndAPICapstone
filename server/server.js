const express = require('express');
const bodyParser = require('body-parser')

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true, useNewUrlParser: true}));
app.use(express.json());
// initialize routes
app.use('/api',require('./Routes/apiRoutes.js'));

// error handling middleware
app.use(function(err,req,res,next){
    //console.log(err);
    res.status(422).send({error: err.message});
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}!`);
});
