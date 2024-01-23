import { Injectable } from '@angular/core';
import { computed, signal, untracked, WritableSignal } from '@angular/core';
@Injectable()
export class EventBusSignals<E> {
    private events: Map<keyof E, WritableSignal<any>> = new Map<keyof E, WritableSignal<any>>();

    set<K extends keyof E>(key: K, value: E[K]): void {
      if (!this.events.has(key)) {
        this.events.set(key, signal<E[K] | null>(null));
      }
      const signalInstance = this.events.get(key) as WritableSignal<E[K]>;
      signalInstance.set(value);
    }
    update<K extends keyof E>(key: K, updateFn: (value: E[K]) => E[K]): void {
        if (!this.events.has(key)) {
          this.events.set(key, signal<E[K] | null>(null));
        }
        const signalInstance = this.events.get(key) as WritableSignal<E[K]>;
        signalInstance.update(updateFn);
      }
    select<K extends keyof E>(key: K): WritableSignal<E[K]> {
      if (!this.events.has(key)) {
        this.events.set(key, signal<E[K]| null>(null));
      }
      return this.events.get(key) as WritableSignal<E[K]>;
    }
  
    unsubscribeChange(nameArr: keyof E): void;
    unsubscribeChange(nameArr: Array<keyof E>): void;
    unsubscribeChange<K extends keyof E>(nameArr?: K | Array<K>): void {
      if (!nameArr || (Array.isArray(nameArr) && nameArr.length === 0)) return;
  
      if (Array.isArray(nameArr)) {
        nameArr.forEach(name => {
          this.deleteEvents(name);
        });
      } else {
        this.deleteEvents(nameArr);
      }
    }
  
    deleteEvents<K extends keyof E>(key: K): void {
      if (this.events.has(key)) {
        this.events.delete(key);
      }
    }
  }