import {EventEmitter, Injectable, Type} from '@angular/core';
import {Observable, Subject} from "rxjs";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {
  private events: Map<String, EventEmitter<any>> = new Map<String, EventEmitter<any>>();
  constructor() {
    console.log('init EventBusService');
  }
  pushChange<T>(nodeId: string, value: T): void {
          if (!this.events.has(nodeId)) {
            this.events.set(nodeId ,new EventEmitter<T>());
          }
        (this.events.get(nodeId) as  EventEmitter<T>).next(value);
     }
  listenChange<T>(nodeId: string): Observable<T> {
      if (!this.events.has(nodeId)) {
        this.events.set(nodeId, new EventEmitter<T>());
      } 
      return (this.events.get(nodeId) as  Subject<T>).pipe(
        tap(k =>{
          console.log(k)
        })
      );
  }
  unsubscribeChange (nameArr: string): void;
  unsubscribeChange (nameArr: Array<string>): void;
  unsubscribeChange<T>(nameArr?: (string | Array<string>)): void {
    if(!nameArr || nameArr.length == 0) return;
    if(Array.isArray(nameArr)){
      nameArr.forEach(name => {
        this.deleteEvents(name);
      })
    } else {
      this.deleteEvents(nameArr);
    }
  }
  deleteEvents<T>(nodeId: string): void {
    if(this.events.has(nodeId)) {
      let subscription = this.events.get(nodeId);
      subscription && typeof subscription.unsubscribe === "function" && subscription.unsubscribe();
      this.events.delete(nodeId);
    }
  }
}