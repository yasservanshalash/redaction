"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gender_1 = require("./gender/gender");
var cv = "She was the best waitress in the world in 2013";
console.log("Received: " + cv);
var words = cv.split(" ");
words.forEach(function (value, index) {
    words[index] = (0, gender_1.replace_gender)(value);
});
var redacted = words.join(" ");
console.log("Return: " + redacted);
