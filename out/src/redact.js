"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redact = void 0;
var gender_1 = require("./gender/gender");
function redact(cv, name) {
    var words = cv.split(" ");
    words.forEach(function (value, index) {
        words[index] = (0, gender_1.replace_gender)(value);
    });
    return (words.join(" "));
}
exports.redact = redact;
