"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERB_ES_SUFFIXES = exports.pluralize_verbs = void 0;
function pluralize_verbs(s) {
    var re = /\bs?he\b\s+(.+?)\b/gi;
    var match;
    while ((match = re.exec(s)) !== null) {
        var split = match[0].split(/\b/gi);
        var replace = split[0] + split[1] + pluralize_verb(split[2]);
        s = s.replace(match[0], replace);
    }
    return s;
}
exports.pluralize_verbs = pluralize_verbs;
function pluralize_verb(verb) {
    if (verb.endsWith('ies')) {
        return verb.substring(0, verb.length - 3) + 'y';
    }
    for (var _i = 0, VERB_ES_SUFFIXES_1 = exports.VERB_ES_SUFFIXES; _i < VERB_ES_SUFFIXES_1.length; _i++) {
        var suffix = VERB_ES_SUFFIXES_1[_i];
        if (verb.endsWith(suffix)) {
            return verb.substring(0, verb.length - 2);
        }
    }
    if (verb.endsWith('s')) {
        return verb.substring(0, verb.length - 1);
    }
    return verb;
}
exports.VERB_ES_SUFFIXES = ['ses', 'zes', 'xes', 'ches', 'shes'];
