import { ObjectId } from 'bson';
import { IAudit } from './audit';
import { IGeometry } from './geometry';
import { IEventPropertiesPlain, IEventProperties } from './eventProperties'

export interface IEventPlain {
  id?: ObjectId;
  version?: number;
  type: string;
  properties: IEventPropertiesPlain;
  geometry: IGeometry;
  audit: IAudit
};

export interface IEvent {
  id?: ObjectId;
  version?: number;
  type: string;
  properties: IEventProperties;
  geometry: IGeometry;
  audit: IAudit
}

