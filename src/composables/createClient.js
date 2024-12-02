import * as contentful from 'contentful';
export function createClient() {
	const client  = contentful.createClient({
		space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
		environment: import.meta.env.VITE_CONTENTFUL_ENV,
		accessToken: import.meta.env.VITE_CONTENTFUL_API_KEY,
	});
	return { client };
}