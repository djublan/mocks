import { IGeometryType } from './geometryType'

export interface IGeometry {
  type: IGeometryType;
  coordinates: [any];
}