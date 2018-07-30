import { ITimestamp } from './timestamp';
import { IAuthor } from './author';

export interface IAudit {
  createdAt: ITimestamp;
  createdBy: IAuthor;
  lastModifiedAt: ITimestamp;
  lastModifiedBy: IAuthor;
  expiredAt: ITimestamp;
  expiredBy: IAuthor
}

