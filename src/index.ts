export * from './lib/test';
import {privateLib} from '../libs/public-lib/';

console.log({res : privateLib()});