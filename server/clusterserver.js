const cluster = require('cluster');
const os = require('os');
const runExpressServer = require('./clusterindex.js');

// Check if current process is master.
if (cluster.isMaster) {
  const cpuCount = os.cpus().length;
  console.log(`total of ${cpuCount} cpus are running`)
  for (let j = 1; j <= cpuCount; j++) {
    console.log(`CPU#${j} is active`)
    cluster.fork();
  }
} else {
  runExpressServer();
}

cluster.on('exit', function (worker) {
  console.log(`Worker ${worker.id} Terminited'`);
  console.log(`Staring a new worker`);
  cluster.fork();
});