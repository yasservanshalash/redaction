"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redact_1 = require("./src/redact");
var cv = "Alice won the best actress award in 2013. She was the first person on the moon.";
var name = "Alice";
console.log(cv);
console.log((0, redact_1.redact)(cv, name));
