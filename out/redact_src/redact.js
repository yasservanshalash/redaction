"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redact = void 0;
var gender_1 = require("./gender");
var contacts_1 = require("./contacts");
var other_1 = require("./other");
function redact(cv, name) {
    cv = (0, contacts_1.redactContacts)(cv);
    cv = (0, gender_1.replaceGender)(cv);
    cv = (0, other_1.redactOther)(cv, "Alice");
    return (cv);
}
exports.redact = redact;
