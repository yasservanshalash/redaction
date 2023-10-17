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
function findPunctuation(word) {
    for (var i = 0; i < word.length; i++) {
        if (!word.charAt(i).match(/[a-zA-Z]/g))
            return (i);
    }
    return (0);
}
function normalise(word) {
    word = word.toLocaleLowerCase();
    var punct = findPunctuation(word);
    if (punct)
        return (word.substring(0, punct));
    return (word);
}
function restore(word, returnValue) {
    if (word == capitalizeFirstLetter(word))
        returnValue = capitalizeFirstLetter(returnValue);
    var punct = findPunctuation(word);
    if (punct) {
        var add = word.substring(punct, word.length);
        returnValue += add;
    }
    return (returnValue);
}
function replaceGender(word) {
    var find = normalise(word);
    var returnValue = find;
    mfn_json_1.default.forEach(function (value) {
        if (find == value.m || find == value.f)
            returnValue = value.n;
    });
    return (restore(word, returnValue));
}
exports.replaceGender = replaceGender;
