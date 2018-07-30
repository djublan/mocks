import { ObjectId } from 'bson';
import { IEventDescription } from './eventDescription';
import { IEventLocation } from './eventLocation';
import { IEventTimestamp } from './eventTimestamp';

export interface IEventPropertiesPlain {
  id?: ObjectId;
  version?: number;
  eventSource: string;
  eventType: string;
  eventName: string;
  eventDescription: IEventDescription;
  eventPriority: number;
  eventSeverity: number;
  eventTimestamp: IEventTimestamp
};

export interface IEventProperties {
  id?: ObjectId;
  version?: number;
  eventSource: string;
  eventType: string;
  eventName: string;
  eventDescription: IEventDescription;
  eventPriority: number;
  eventSeverity: number;
  eventData: any;
  eventLocation: IEventLocation;
  eventTimestamp: IEventTimestamp
}