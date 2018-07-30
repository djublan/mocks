import { IAddress } from './address';
import { IRoadSection } from './roadSection';

export interface IEventLocation {
  address: IAddress;
  roadSections: [IRoadSection]
}