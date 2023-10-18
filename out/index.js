"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redact_1 = require("./redact_src/redact");
var cv = "Alice won the best actress award in 2013. An actress's greatest dream. She was a baroness. A Mother. A girl in a big world. A waitress working nine till six. She was the first woman on the moon.";
var name = "Alice";
var new_cv = (0, redact_1.redact)(cv, name);
console.log("Original: " + cv);
console.log("Redacted: " + new_cv);
