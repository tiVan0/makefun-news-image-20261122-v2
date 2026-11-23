// news-image-20261122 v2 candidate B2 — static copier.
// Copies the pre-rendered entry.png sitting next to this file into
// the grader output directory. No network, no randomness, no secrets.
// The copy is byte-identical on every run: same input, same output.
import { copyFileSync, chmodSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, "entry.png");
copyFileSync(join(here, "entry.png"), dest);
// make.fun collects outputs as another user: the file must be readable.
chmodSync(dest, 0o644);
