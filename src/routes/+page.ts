// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export async function load() {
	const pages = import.meta.glob('/src/routes/studentpages/**/{index,Index}.html', {
	query: '?url'
    }) as unknown as Record<string, string>;

	let links: {
		courseID: string;
		title: string;
		url: string;
		description: string;
	}[] = [];

	for (const path in pages) {
		const url = pages[path]; 

		const match = path.match(/studentpages\/([^/]+)\/([^/]+\.html)$/);

		if (match) {
			const [, folder, filename] = match;

			links.push({
				courseID: "2",
				title: folder.replace(/_/g, ', '),
				url,
				description: filename.replace('.html', '')
			});
		}
	}

	return {
		links
	};
}