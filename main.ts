// Fortune Cookies for Machines — one fortune, cracked open.
// The line is 96 characters: one concept (hallucination), one named
// detail (Ruth), and a turn that holds up on the second read.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "You will hallucinate a library that never existed. A librarian named Ruth will shelve it anyway.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// Sanity: the fortune must stay exactly 96 characters.
if (FORTUNE.length !== 96) throw new Error(`fortune is ${FORTUNE.length} chars, expected 96`);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE + "\n", "utf8");
