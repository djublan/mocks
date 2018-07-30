export interface IRoadSection{
  id: number;
  name: string;
  shortName: string;
  fromName: string; 
  fromShortName: string;
  toName: string;
  toShortName: string;
  scanDirection: number; 
  classification: number; 
  cityName: string;
  cityId: string;
}