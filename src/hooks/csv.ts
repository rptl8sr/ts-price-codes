import { useState, useEffect } from 'react';
import { ParsedData } from '../contsants/types.ts';



const delimiter = ';';

const parseData = (rawData: string): ParsedData[] => {
  const lines = rawData.split('\n');
  const headers = ['code', 'fontFamily', 'fontSize', 'fontColor', 'anchorX', 'anchorY', 'align'];

  return lines.map(line => {
    const values = line.split(delimiter);
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index];
      return obj;
    }, {} as ParsedData);
  });
};

const loadCSV = async (path: string): Promise<ParsedData[]> => {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const text = await response.text();
    return parseData(text);
  } catch (error) {
    console.error("Error loading CSV file:", error);
    return [];
  }
};

const useCSVData = (csvPath: string) => {
  const [data, setData] = useState<ParsedData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parsedData = await loadCSV(csvPath);
        setData(parsedData);
      } catch (e) {
        console.error(e);
        setError('Error loading CSV file');
      } finally {
        setLoading(false);
      }
    };

    void fetchData();
  }, [csvPath]);

  return { data, loading, error };
};

export default useCSVData;