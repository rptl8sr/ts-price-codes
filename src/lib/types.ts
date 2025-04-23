type TAlign = 'left' | 'center' | 'right';


interface ICodeData {
  code:  string;
  fontFamily: string;
  fontSize: string;
  fontColor: string;
  anchorX: number;
  anchorY: number;
  align: TAlign
}

export type { ICodeData, TAlign };