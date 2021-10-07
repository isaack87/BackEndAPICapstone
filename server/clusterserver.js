const cluster = require('cluster');
const os = require('os');
const runExpressServer = require('./clusterindex.js');

// Check if current process is master.
if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  console.log(`total of ${cpuCount} supercomputers are running`)
  for (let j = 1; j <= cpuCount; j++) {
    console.log(`SuperComputer#${j} is active`)
    cluster.fork();
  }
} else {
  runExpressServer();
}

cluster.on('exit', function (worker) {
  console.log(`Minion ${worker.id} has died'`);
  console.log(`Sending in a new minion`);
  cluster.fork();
});