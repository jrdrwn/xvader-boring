import * as fs from "node:fs";

const REVIEW_OPEN = "Held my report together for six months, ";
const REVIEW_MIDDLE = "then unbent itself into a SIM ejector ";
const REVIEW_CLOSE = "and left the job.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";
const OUTPUT_PATH = OUTPUT_DIR + "/" + OUTPUT_FILE;

const entry = [REVIEW_OPEN, REVIEW_MIDDLE, REVIEW_CLOSE].join("");

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_PATH, entry, "utf8");
