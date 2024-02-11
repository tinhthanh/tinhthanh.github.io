import { Injectable } from '@angular/core';
import { AbsDb } from './abs.db';
import { AppItem } from './entitys';
import { BuilderType } from '../modules/form-field/form.builder';
import { Table} from 'dexie';
export const tableName = 'AppItem';
@Injectable({
  providedIn: 'root'
})
export class AppService extends AbsDb<AppItem> {
  [tableName]!: Table<AppItem, string>;
  constructor() {
    super(tableName);
  }
  override getTable(): Table<AppItem, string> {
     return this.AppItem;
  }
  override fields(): { [K in keyof AppItem]: BuilderType<AppItem> } {
    return {
      id: 'id',
      seqNo: 'seqNo',
      deleted: 'deleted',
      sync: 'sync',
      // default
      icon: 'icon',
      name: 'name',
      description: 'description',
      attributes: 'attributes'
    }
  }
}
