const date: string = '250422';

interface IPageConfig {
  id: string;
  name: string;
}

const PAGES: IPageConfig[] = [
  {
    id: `${date}_R_con_msh_Price`,
    name: 'Стандарт',
  },
  {
    id: `${date}_KFC_con_msh_Price`,
    name: 'Стандарт КФС',
  },
  {
    id: `${date}_R_SB_beercan_Price`,
    name: 'Смартбокс',
  },
  {
    id: `${date}_KFC_SB_beercan_Price`,
    name: 'Смартбокс КФС',
  },
];

export type { IPageConfig };
export { PAGES };
