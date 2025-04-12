import { fork } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export * from './lib/test1.js';

const cp = fork(join(__dirname, './child.js'));

cp.on('exit', () => {
    console.log('child process exited');
})

setInterval(() => {
    console.log('still alive');
}, 1000);