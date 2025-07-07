export const prerender = true;

// src/routes/+page.ts
import type { PageLoad } from '../$types';

export const load: PageLoad = async ({ fetch }) => {
	const [linksRes, coursesRes] = await Promise.all([
		fetch('/studentpages/links.json'),
		fetch('/studentpages/courses.json')
	]);

	if (!linksRes.ok || !coursesRes.ok) {
		console.error('⚠️ Fehler beim Laden von studentpages JSON-Dateien');
		return { links: [], courses: [] };
	}

	const [links, courses] = await Promise.all([
		linksRes.json(),
		coursesRes.json()
	]);

	return { links, courses };
};