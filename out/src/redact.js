"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redact = void 0;
var gender_1 = require("./gender/gender");
var gender_2 = require("./gender/gender");
function redact(cv, name) {
    var words = cv.split(" ");
    words.forEach(function (value, index) {
        //checks and replaces gendered words
        words[index] = (0, gender_1.replaceGender)(value);
        if (index > 0 && words[index - 1].toLocaleLowerCase() == "an" && words[index].charAt(0).match(/[aeiou]/) == null) {
            words[index - 1] == (0, gender_2.capitalizeFirstLetter)(words[index - 1]) ?
                words[index - 1] = "A" : words[index - 1] = "a";
        }
    });
    return (words.join(" "));
}
exports.redact = redact;
