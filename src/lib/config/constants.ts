const DATA_PATH = import.meta.env.VITE_DATA_PATH || '/data';
const FONTS_PATH = import.meta.env.VITE_FONTS_PATH || '/fonts';
const IMAGES_PATH = import.meta.env.VITE_IMAGES_PATH || '/images';
const CSV_SEPARATOR = import.meta.env.VITE_CSV_SEPARATOR || ';';

export { DATA_PATH, FONTS_PATH, IMAGES_PATH, CSV_SEPARATOR };