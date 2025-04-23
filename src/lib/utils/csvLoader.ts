import type { ICodeData, TAlign } from '$lib/types';
import { DATA_PATH, CSV_SEPARATOR} from '$lib/config';

async function loadCSV(id: string, fetchFn?: typeof fetch): Promise<ICodeData[]> {
	const fetcher = fetchFn || fetch;
	const url = `${DATA_PATH}/${id}.csv`;
	console.log(`Загрузка CSV из: ${url}`);
	
	const response = await fetcher(`${DATA_PATH}/${id}.csv`);

  if (!response) {
    throw new Error(`Failed to fetch CSV file: ${DATA_PATH}/${id}.csv`);
  }
  
  if (!response.ok) {
    throw new Error(`Failed to fetch CSV file ${DATA_PATH}/${id}.csv: ${response.statusText}`);
  }

  const text = await response.text();
  const lines = text.split('\n');
  const data: ICodeData[] = [];

  for (const line of lines) {
    const [code, fontFamily, fontSize, fontColor, anchorX, anchorY, align] = line.split(CSV_SEPARATOR);
    if (code && fontFamily && fontSize && fontColor && anchorX && anchorY && align) {
      data.push({
        code,
        fontFamily,
        fontSize,
        fontColor,
        anchorX: parseFloat(anchorX),
        anchorY: parseFloat(anchorY),
        align: align as TAlign,
      });
    }
  }

  return data;
}

export { loadCSV };