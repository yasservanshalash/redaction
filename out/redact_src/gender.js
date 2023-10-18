"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceGender = exports.capitalizeFirstLetter = void 0;
var mfn_json_1 = __importDefault(require("./mfn.json"));
function capitalizeFirstLetter(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
exports.capitalizeFirstLetter = capitalizeFirstLetter;
function findAndReplace(word) {
    var find = word.toLocaleLowerCase();
    var returnValue = find;
    mfn_json_1.default.forEach(function (value) {
        if (find == value.m || find == value.f)
            returnValue = value.n;
    });
    if (word == capitalizeFirstLetter(word))
        returnValue = capitalizeFirstLetter(returnValue);
    return (returnValue);
}
function replaceGender(cv) {
    var i = 0;
    while (i < cv.length && !cv.charAt(i).match(/[a-zA-Z]/))
        i++;
    var word = cv[i++];
    while (i < cv.length) {
        if (cv.charAt(i).match(/[a-zA-Z]/))
            word += cv.charAt(i);
        else {
            var replaceWord = findAndReplace(word);
            if (word != replaceWord) {
                var fix = 0;
                if (i > 3 && cv.charAt(i - word.length - 2) == "n"
                    && !(replaceWord.charAt(0).match(/aeiouAEIOU/)))
                    fix = 2;
                var edit = cv.substring(0, i - word.length - fix);
                if (fix)
                    cv = edit + " " + replaceWord + cv.substring(i);
                else
                    cv = edit + replaceWord + cv.substring(i);
                var diff = 1;
                if (word.length > replaceWord.length)
                    diff -= word.length - replaceWord.length;
                else if (word.length > replaceWord.length)
                    diff += replaceWord.length - word.length;
                i += diff;
            }
            while (i < cv.length && !cv.charAt(i).match(/[a-zA-Z]/))
                i++;
            word = cv.charAt(i);
        }
        i++;
    }
    return (cv);
}
exports.replaceGender = replaceGender;
