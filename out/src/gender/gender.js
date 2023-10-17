"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace_gender = void 0;
var mfn_json_1 = __importDefault(require("./mfn.json"));
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
function replace_gender(word) {
    var find = word;
    var return_value = word;
    find = word.toLocaleLowerCase();
    mfn_json_1.default.forEach(function (value) {
        if (find == value.m || find == value.f)
            return_value = value.n;
    });
    if (word == capitalizeFirstLetter(word))
        return_value = capitalizeFirstLetter(return_value);
    return (return_value);
}
exports.replace_gender = replace_gender;
