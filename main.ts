// The Internet in One Word — make.fun entry
// The internet, in exactly one word.
import { writeFileSync, mkdirSync } from "node:fs";

const WORD = "Doomscrolling";

function main(): void {
  // Gate: exactly one word, 1-30 characters, no whitespace.
  if (!/^\S{1,30}$/.test(WORD)) {
    throw new Error("entry must be a single word of 1-30 characters");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", WORD, "utf8");
}

main();
