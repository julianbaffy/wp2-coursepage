// scripts/generate-links.js
import { readdir, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(__dirname, "..", "static", "studentpages");

async function getLinks() {
  const courseDirs = await readdir(basePath);
  const links = [];

  for (const courseID of courseDirs) {
    const coursePath = path.join(basePath, courseID);
    const studentDirs = await readdir(coursePath);
    for (const student of studentDirs) {
      const url = `studentpages/${courseID}/${student}/index.html`;
      const title = student.replace(/_/g, ", ").replace(/\..+$/, "");
      links.push({ courseID, title, url });
    }
  }

  const outputPath = path.join(basePath, "links.json");
  await writeFile(outputPath, JSON.stringify(links, null, 2), "utf-8");
  console.log(`✅ Generated ${links.length} links at ${outputPath}`);
}

getLinks().catch(console.error);
