import { IEvent } from './event';

export interface IEventCollection {
  type: string; 
  features: [IEvent]
}