import {replace_gender} from './gender/gender';

let cv:string = "She was the best waitress in the world in 2013";
console.log("Received: " + cv);
let words:string[] = cv.split(" ");

words.forEach(function (value, index) {
	words[index] = replace_gender(value);
});

let redacted:string = words.join(" ");
console.log("Return: " + redacted);