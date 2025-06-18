// scripts/generate-links.js
import { readdir, stat, writeFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.join(__dirname, "..", "static", "studentpages");

async function getLinks() {
  const courseDirs = await readdir(basePath);
  const links = [];
  const coursesMap = new Map(); // Zum Vermeiden von Duplikaten

  for (const courseFolder of courseDirs) {
    const coursePath = path.join(basePath, courseFolder);
    const statCourse = await stat(coursePath);
    if (!statCourse.isDirectory()) continue;

    // 🎯 Course ID & Teacher extrahieren
    const courseMatch = courseFolder.match(/^(\d+)_([A-ZÄÖÜa-zäöü]+)$/);
    if (!courseMatch) {
      console.warn(`⚠️ Ordnername "${courseFolder}" entspricht nicht dem Muster "Zahl_Buchstaben"`);
      continue;
    }

    const courseID = courseMatch[1];
    const teacher = courseMatch[2];

    // Im Map-Set speichern
    coursesMap.set(courseID, { courseID, teacher });

    const studentDirs = await readdir(coursePath);
    for (const studentDir of studentDirs) {
      const studentPath = path.join(coursePath, studentDir);
      const statStudent = await stat(studentPath);
      if (!statStudent.isDirectory()) continue;

      const indexNames = ["index.html", "Index.html"];
      let foundIndex = null;
      for (const name of indexNames) {
        try {
          const statIndex = await stat(path.join(studentPath, name));
          if (statIndex.isFile()) {
            foundIndex = name;
            break;
          }
        } catch {
          // Datei existiert nicht
        }
      }

      if (!foundIndex) continue;

      const title = studentDir
        .replace(/_/g, " ")
        .replace(/\b(\w)/g, c => c.toUpperCase());

      const url = `studentpages/${courseFolder}/${studentDir}/${foundIndex}`;
      links.push({ courseID, teacher, title, url });
    }
  }

  // 🔽 JSON-Dateien schreiben
  const outputLinksPath = path.join(basePath, "links.json");
  await writeFile(outputLinksPath, JSON.stringify(links, null, 2), "utf-8");

  const outputCoursesPath = path.join(basePath, "courses.json");
  const courses = Array.from(coursesMap.values()).sort((a, b) => a.courseID.localeCompare(b.courseID));
  await writeFile(outputCoursesPath, JSON.stringify(courses, null, 2), "utf-8");

  console.log(`✅ Generated ${links.length} links at ${outputLinksPath}`);
  console.log(`✅ Generated ${courses.length} courses at ${outputCoursesPath}`);
}

getLinks().catch(console.error);
