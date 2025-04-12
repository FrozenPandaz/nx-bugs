
console.log('started');
setTimeout(() => {
    process.exit();
}, 3000);

process.on('exit', () => {
    console.log('exited');
})