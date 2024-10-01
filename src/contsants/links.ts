const baseImgPath = '/assets/img/';
const baseDataPath = '/assets/data/';

enum Background {
  standard = `${baseImgPath}241008_KFC_con_msh_Price.png`,
  smartbox = `${baseImgPath}241008_KFC_SB_beercan_Price.png`,
}

enum Data {
  standard = `${baseDataPath}241008_KFC_con_msh_Price.csv`,
  smartbox = `${baseDataPath}241008_KFC_SB_beercan_Price.csv`,
}

export { Background, Data };