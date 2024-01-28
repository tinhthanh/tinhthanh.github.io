import { Signal } from '@angular/core';
import { computed, signal, untracked, WritableSignal } from '@angular/core';
import { isEqual } from 'lodash';
import { generateUuid4 } from 'src/app/modules/form-field/db-utils';
export interface EventBroadcas<E> {
  id: string; // from id
  type: 'set';
  data: any;
  key: keyof E;
}
export class EventBusSignals<E> {
  readonly uuid = generateUuid4();
  private events: Map<keyof E, WritableSignal<any>> = new Map<
    keyof E,
    WritableSignal<any>
  >();
  channel = new BroadcastChannel('BuilderSignals');
  constructor(public name: string) {
    this.channel = new BroadcastChannel(name);
    console.log('init EventBusSignals', this.events);
    this.channel.addEventListener('message', (event) => {
      const data: EventBroadcas<E> = event.data;
      if (data && data.id !== this.uuid) {
        if (data.type === 'set') {
          const curentData = this.select(data.key)();
          if(!isEqual(curentData,data.data)) {
            this.set(data.key, data.data);
          }
        }
      }
      // console.log(event);
    });
  }
  set<K extends keyof E>(key: K, value: E[K]): void {
    if (!this.events.has(key)) {
      this.events.set(key, signal<E[K] | null>(null));
    }
    const signalInstance = this.events.get(key) as WritableSignal<E[K]>;
    signalInstance.set(value);
    // trigger forword set
    const request: EventBroadcas<E> = {
      id: this.uuid,
      type: 'set',
      key,
      data: value,
    };
    this.channel.postMessage(request);
  }
  // update<K extends keyof E>(key: K, updateFn: (value: E[K]) => E[K]): void {
  //   if (!this.events.has(key)) {
  //     this.events.set(key, signal<E[K] | null>(null));
  //   }
  //   const signalInstance = this.events.get(key) as WritableSignal<E[K]>;
  //   signalInstance.update(updateFn);
  // }
  // signal read only
  select<K extends keyof E>(key: K): Signal<E[K]> {
    if (!this.events.has(key)) {
      this.events.set(key, signal<E[K] | null>(null));
    }
    return (this.events.get(key) as WritableSignal<E[K]>).asReadonly();
  }
  // unsubscribeChange(nameArr: keyof E): void;
  // unsubscribeChange(nameArr: Array<keyof E>): void;
  // unsubscribeChange<K extends keyof E>(nameArr?: K | Array<K>): void {
  //   if (!nameArr || (Array.isArray(nameArr) && nameArr.length === 0)) return;

  //   if (Array.isArray(nameArr)) {
  //     nameArr.forEach(name => {
  //       this.deleteEvents(name);
  //     });
  //   } else {
  //     this.deleteEvents(nameArr);
  //   }
  // }

  // deleteEvents<K extends keyof E>(key: K): void {
  //   if (this.events.has(key)) {
  //     this.events.delete(key);
  //   }
  // }
}
