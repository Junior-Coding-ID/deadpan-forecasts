const fs = require("node:fs");
const path = require("node:path");

const ANSWER = "Torvick: Today's 1.2 inches of rain will fall at 3:14 p.m. as a single 80-ton drop on Market Square; umbrellas are discouraged, and skies clear by 3:15.";

if (ANSWER.length < 1 || ANSWER.length > 160) {
  throw new Error("Answer length " + ANSWER.length + " is outside the 1-160 gate");
}
if (ANSWER !== ANSWER.trim()) {
  throw new Error("Answer must not have leading or trailing whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || process.env.MAKEFUN_OUTPUT || "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ANSWER, "utf8");
console.log("Wrote entry.txt (" + ANSWER.length + " chars)");

const written = fs.readFileSync(path.join(outDir, "entry.txt"), "utf8");
if (written !== ANSWER) {
  throw new Error("entry.txt does not match ANSWER byte-for-byte");
}
