import {redact} from './src/redact';

let cv:string = "Alice won the best actress award in 2013. She was the first person on the moon.";
let name:string = "Alice";

console.log(cv);
console.log(redact(cv, name));