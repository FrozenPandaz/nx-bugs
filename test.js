const { exec } = require("child_process");

function runNx() {
    const child = exec('npx nx show projects', {
        stdio: 'inherit'
    });

    child.stdout.pipe(process.stdout);
}

// const initialFreeMem = require('os').freemem();
// setInterval(() => {
//     console.log('Memory Usage', require('os').freemem() - initialFreeMem);
// }, 100);

runNx();
runNx();
runNx();
runNx();
runNx();
runNx();
runNx();
runNx();
runNx();
runNx();