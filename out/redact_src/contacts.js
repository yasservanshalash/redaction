"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactContacts = void 0;
function redactContacts(cv) {
    var linkedin = /https:\/\/(www\.)?linkedin\.com\S*/gi;
    var twitter = /https:\/\/(www\.)?twitter\.com\S*/gi;
    var facebook = /https:\/\/(www\.)?facebook\.com\S*/gi;
    var instagram = /https:\/\/(www\.)?instagram\.com\S*/gi;
    var github = /https:\/\/(www\.)?github\.com\S*/gi;
    // const phoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    var phoneNumberRegex = /[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}/gi;
    // const email = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/gi;
    // Replace matched patterns with asterisks
    cv = cv.replace(linkedin, '********');
    cv = cv.replace(twitter, '********');
    cv = cv.replace(facebook, '********');
    cv = cv.replace(instagram, '********');
    cv = cv.replace(github, '********');
    cv = cv.replace(phoneNumberRegex, "*redacted number*");
    // cv = cv.replace(email, "*********");
    return (cv);
}
exports.redactContacts = redactContacts;
