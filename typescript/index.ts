import { ObjectId } from 'bson';
import { isNullOrUndefined } from 'util';

//
// The order in this file is relevant, since there are objects
// which depend on other objects to be compiled firstly
//

export function getMockedObjectId(): ObjectId {
  return new ObjectId('ff'.repeat(12));
}
export function getMockedDate(timeToAdd?: number): Date {
  const base = new Date('2017-11-13T13:13:13.1313Z');
  if (isNullOrUndefined(timeToAdd)) {
    return base;
  }
  return new Date(base.getTime() + timeToAdd);
}

export * from './address';
export * from './audit';
export * from './author';
export * from './errorResponse';
export * from './eventDescription';
export * from './eventLocation';
export * from './eventProperties';
export * from './eventTimestamp';
export * from './geometry';
export * from './geometryType';
export * from './localizedString'
export * from './roadSection';
export * from './timestamp';
export * from './upperResult';

export * from './event';
export * from './eventCollection';

