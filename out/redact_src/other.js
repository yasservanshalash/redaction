"use strict";
/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   redact.ts                                          :+:    :+:            */
/*                                                     +:+                    */
/*   By: mstegema <mstegema@student.codam.nl>         +#+                     */
/*                                                   +#+                      */
/*   Created: 2023/10/17 15:53:05 by mstegema      #+#    #+#                 */
/*   Updated: 2023/10/18 13:03:36 by mstegema      ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */
Object.defineProperty(exports, "__esModule", { value: true });
exports.redactOther = void 0;
var nlp = require('compromise');
function redactOther(text, fullName) {
    var doc = nlp(text);
    var pronounMap = {
        he: 'they',
        she: 'they',
        him: 'them',
        her: 'them',
        his: 'their',
        hers: 'their',
        himself: 'themself',
        herself: 'themself',
    };
    var possesivePronounMap = {
        her: 'their',
        his: 'their',
        hers: 'their',
    };
    //	Name
    doc.match(fullName).forEach(function (match) {
        match.replace('Candidate');
    });
    // Location
    doc.match('#Country').forEach(function (match) {
        match.replace('Country');
    });
    doc.match('#City').forEach(function (match) {
        match.replace('City');
    });
    doc.match('#Region').forEach(function (match) {
        match.replace('Region');
    });
    // Pronouns (gender)
    doc.match('#Pronoun #Copula').match('was').forEach(function (match) {
        match.replace('were');
    });
    doc.match('#Pronoun !#Noun').match('#Pronoun').forEach(function (match) {
        var pronoun = match.text().toLowerCase();
        if (pronounMap[pronoun]) {
            match.replace(pronounMap[pronoun]);
        }
    });
    doc.match('#Pronoun #Noun').match('#Pronoun').forEach(function (match) {
        var pronoun = match.text().toLowerCase();
        if (possesivePronounMap[pronoun]) {
            match.replace(possesivePronounMap[pronoun]);
        }
    });
    doc.match('#Pronoun #Verb').verbs().toPastTense();
    // Dates
    doc.match('#Date').not('years').forEach(function (match) {
        match.replace('Date');
    });
    // Contact information
    doc.match('#Email').forEach(function (match) {
        match.replace('***@***.***');
    });
    doc.phoneNumbers().replace('(###) ###-###');
    doc.atMentions().replace('@***');
    //linkedin yasser
    return doc.text();
}
exports.redactOther = redactOther;
