import Dexie, { Table, liveQuery } from 'dexie';
import { BuilderType } from '../modules/form-field/form.builder';
import { Observable, from, of, switchMap } from 'rxjs';
import { generateUuid4 } from '../modules/form-field/db-utils';
export interface EntityModel {
  id?: string; // Optional for new entities
  seqNo?: number;
  deleted?: boolean;
  sync?: boolean;
}
export abstract class AbsDb<T extends EntityModel> extends Dexie {
  constructor(tableName: string) {
    super('VetGO');
    this.version(1).stores({
      [tableName] :  Object.keys(this.fields()).join(','),
    })
    this.on('populate', () => this.populate());
  }
  async populate() {
    // TODO check user login and sync data
    console.log('đi đồng bộ data -> có thể chạy service worker')
  }
  addOrUpdate(item: T): Observable<string | number| null> {
    if(item.id) {
      return from(this.getTable().get(item.id)).pipe(
        switchMap(
          rs => {
            if (rs && item.id) {
              const merge = { ...rs, ...item };
              return from(this.getTable().update(item.id, merge))
            } else {
              return of(null);
            }
          }
        )
      )
    } else {
      item.id = generateUuid4();
      item.seqNo = new Date().getTime();
      item.sync = false;
      return from(this.getTable().add(item, item.id));
    }
  }
  getAll() {
    return liveQuery(() => this.getTable().toArray())
  }
  deleteById(id: string) {
    return this.getTable().delete(id);
  }
  // async resetDatabase() {
  //   await AppState.transaction('rw', 'state', () => {
  //     this.state.clear();
  //     this.populate();
  //   });
  // }
  abstract fields(): {[K in keyof T]: BuilderType<T> };
  abstract getTable() : Table<T, string>;
}
// export const AppState = new StateDb();
