import type { PageLoad } from './$types';

import { type IPageConfig, PAGES } from '$lib/config';
import { loadCSV } from '$lib/utils';


const load: PageLoad = async ({ params, fetch }) => {
  const { slug } = params;
  
  if (!slug) {
    console.error('No slug provided in params');
    return {
      page: null,
      blocks: null,
      error: 'No slug provided in params'
    };
  }

  const page = PAGES.find((page: IPageConfig): boolean => page.id === slug);
  if (!page) {
    console.error(`Page not found for slug: ${slug}`);
    return {
      page: null,
      blocks: null,
      error: `Page not found for slug: ${slug}`
    };
  }

	try {
  	const blocks = await loadCSV(page.id, fetch);
		
		return {
			page, 
			blocks, 
			error: null,
		};
	} catch (error) {
		console.error(`Failed to load blocks for page: ${page.id}`, error);
		return {
			page, 
			blocks: null,
			error: `Failed to load blocks for page: ${page.id}: ${error instanceof Error ? error.message : String(error)}`
		};
	}
};

export { load };