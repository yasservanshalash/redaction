import {redact} from './redact_src/redact';

let cv:string = "Alice won the best actress award in 2013. An actress's greatest dream. She was a baroness. A Mother. A girl in a big world. A waitress working nine till six. She was the first woman on the moon.";
let name:string = "Alice";

let new_cv:string = redact(cv, name);

console.log("Original: " + cv);
console.log("Redacted: " + new_cv);