const loadtest = require('loadtest');


// function statusCallback(error, result, latency) {
//     console.log('Current latency %j, result %j, error %j', latency, result, error);
//     console.log('----');
//     console.log('Request elapsed milliseconds: ', result.requestElapsed);
//     console.log('Request index: ', result.requestIndex);
//     console.log('Request loadtest() instance index: ', result.instanceIndex);
// }

const randomID =  Math.floor((Math.random() * 1000000) + 1)
const options = {
    url: `http://localhost:5000/api/related?_id=${randomID}`,
    maxRequests: 500
    //statusCallback: statusCallback
}


loadtest.loadTest(options, function(error, result) {

    if (error) {
        return console.error('Got an error: %s', error);
    }

    console.log(result)
    console.log('Tests run successfully');
});
