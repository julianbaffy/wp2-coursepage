// scripts/generate-links.js
import { readdir, stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(__dirname, "..", "static", "studentpages");

async function getLinks() {
  const courseDirs = await readdir(basePath);
  const links = [];

  for (const courseID of courseDirs) {
    const coursePath = path.join(basePath, courseID);
    const statCourse = await stat(coursePath);
    if (!statCourse.isDirectory()) continue;

    const studentDirs = await readdir(coursePath);
    for (const studentDir of studentDirs) {
      const studentPath = path.join(coursePath, studentDir);
      const statStudent = await stat(studentPath);
      if (!statStudent.isDirectory()) continue;

      const indexPath = path.join(studentPath, "index.html");
      try {
        const statIndex = await stat(indexPath);
        if (!statIndex.isFile()) continue;
      } catch {
        continue; // kein index.html vorhanden
      }

      // Titel aus Ordnernamen generieren
      const title = studentDir.replace(/_/g, " ").replace(/,\s*/, ", ").replace(/\b(\w)/g, c => c.toUpperCase());

      const url = `studentpages/${courseID}/${studentDir}/index.html`;
      links.push({ courseID, title, url });
    }
  }

  const outputPath = path.join(basePath, "links.json");
  await writeFile(outputPath, JSON.stringify(links, null, 2), "utf-8");
  console.log(`✅ Generated ${links.length} links at ${outputPath}`);
}

getLinks().catch(console.error);
