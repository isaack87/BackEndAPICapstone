const loadtest = require('loadtest');

function statusCallback(error, result, latency) {
    console.log('Request index: %j, totalError %j, errorcode frequency %j error %j and RPS %j', result ? result.requestIndex : 'NOT FOUND', latency.totalErrors, latency.errorCodes, error, latency.rps)
}

  function options() {
    let randomNum;
      return {
          url: 'http://localhost:5000/api/related?_id=value',
          maxRequests: 5000,
          concurrency: 100,
          method: 'GET',
          contentType: 'application/json',
          headers: {
              'Content-Type': 'application/json'
          },
          indexParam: "value",
          body:   {
              _id: "value"
          },
          statusCallback: statusCallback,
        indexParamCallback: function () {
        let randomNum = Math.floor(Math.random() * (1000000 - 1 + 1)) + 1
        return randomNum
      }}
  }

  loadtest.loadTest(options(), function (error, result) {
      // This blocks gets called when whole test is finished
    if (error) {
      console.log('Got an error: %s', error)
    }
    console.log('Got the following result from the test>>\n', result)
  })

