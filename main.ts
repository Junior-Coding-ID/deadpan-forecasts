import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan Forecasts for Cities That Do Not Exist — v2 entry
// Bounty: https://make.fun/competition/u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// Gate: exactly one forecast line, 1–160 characters, deadpan tone, fictional city.

const ANSWER =
  "Halwick: A low inversion over the 41°F bay carries every Northside whisper 3 miles to Southbank; postpone private arguments until 10 a.m. winds mix it out.";

const MIN_CHARS = 1;
const MAX_CHARS = 160;

function resolveOutputDir(): string {
  return (
    process.env.MAKEFUN_OUTPUT_DIR ||
    process.env.MAKEFUN_OUTPUT ||
    "/output"
  );
}

function verifyWritten(outPath: string): void {
  // Read back and verify the written file is byte-exact.
  const written = readFileSync(outPath, "utf8");
  if (written !== ANSWER) {
    throw new Error(
      `Verification failed: written entry.txt does not match ANSWER.\nWritten: ${JSON.stringify(written)}\nExpected: ${JSON.stringify(ANSWER)}`,
    );
  }
  const writtenChars = [...written].length;
  if (writtenChars !== [...ANSWER].length) {
    throw new Error(
      `Verification failed: written length ${writtenChars} != expected ${[...ANSWER].length}.`,
    );
  }
  console.log(`Verified ${outPath}: byte-exact, ${writtenChars} chars`);
}

function main(): void {
  // Gate validation: count characters, not bytes.
  const charCount = [...ANSWER].length;
  if (charCount < MIN_CHARS || charCount > MAX_CHARS) {
    throw new Error(
      `Gate failed: answer is ${charCount} characters, must be ${MIN_CHARS}-${MAX_CHARS}.`,
    );
  }
  if (ANSWER.includes("\n")) {
    throw new Error("Gate failed: answer must be a single line.");
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  // Byte-exact write: no trailing newline.
  writeFileSync(outPath, ANSWER, "utf8");
  console.log(
    `Wrote ${outPath} (${charCount} chars, gate ${MIN_CHARS}-${MAX_CHARS}): ${ANSWER}`,
  );
  verifyWritten(outPath);
}

main();
