import { ILocalizedString } from './localizedString';

export interface IAddress {
  houseNumber: number;
  local: boolean;
  street: object;
  city: object;
  fullStreetName: ILocalizedString;
  postalCode: string;
  borough: object;
  coordinates: object;
  humanReadableCode: ILocalizedString;
  isActive: boolean;
  isCertified: boolean
}