const baseImgPath = '/assets/img/';
const baseDataPath = '/assets/data/';

enum Background {
  standard = `${baseImgPath}250422_R_con_msh_Price.png`,
  standardKFC = `${baseImgPath}250422_KFC_con_msh_Price.png`,
  smartbox = `${baseImgPath}250422_R_SB_beercan_Price.png`,
  smartboxKFC = `${baseImgPath}250422_KFC_SB_beercan_Price.png`,
}

enum Data {
  standard = `${baseDataPath}250422_R_con_msh_Price.csv`,
  standardKFC = `${baseDataPath}250422_KFC_con_msh_Price.csv`,
  smartbox = `${baseDataPath}250422_R_SB_beercan_Price.csv`,
  smartboxKFC = `${baseDataPath}250422_KFC_SB_beercan_Price.csv`,
}

export { Background, Data };