import type { LayoutLoad } from './$types';

const load: LayoutLoad = () => {
  return {
    buildTime: import.meta.env.VITE_BUILD_TIME || Date.now(),
  }
};

export { load };