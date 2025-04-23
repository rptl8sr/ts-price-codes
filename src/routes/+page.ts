import { redirect } from '@sveltejs/kit';
import { PAGES } from '$lib/config';

export const load = () => {
	const firstPage = PAGES[0];

	if (firstPage) {
		throw redirect(302, `/${firstPage.id}`);
	} else {
		return {
			error: 'No pages defined in configuration'
		};
	}
};

