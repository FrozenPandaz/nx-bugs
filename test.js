const { exec } = require("child_process");


let i = 1;
function runNx() {
    console.log(`Spawning Nx (${i++})`);
    const child = exec('npx nx show projects --verbose', {
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