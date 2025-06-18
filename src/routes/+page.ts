export const prerender = true;

// src/routes/+page.ts
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('/studentpages/links.json');

	if (!res.ok) {
		console.error('⚠️ Fehler beim Laden der studentpages/links.json');
		return { links: [] };
	}

	const links = await res.json();
	return { links };
};