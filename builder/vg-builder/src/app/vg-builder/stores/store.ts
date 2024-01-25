import { DOCUMENT } from '@angular/common';
import { Injectable, Injector, computed, effect, inject } from '@angular/core';
import type {
    NgtEventManager,
    VgState,
} from '../types';
import { SignalStore } from './signal.store';

export const rootStateMap = new Map<Element, SignalStore<VgState>>();

@Injectable()
export class VgStore extends SignalStore<VgState> {
    readonly #parentStore = inject(VgStore, { optional: true, skipSelf: true });
    readonly #window = inject(DOCUMENT).defaultView;
    readonly #injector = inject(Injector);

    isInit = false;

    init() {
        if (!this.isInit) {
            this.set({
                get: this.get.bind(this),
                set: this.set.bind(this),
                ready: false,

                events: { priority: 1, enabled: true, connected: false },

                controls: null,
                previousStore: this.#parentStore as VgStore,
                setEvents: (events: Partial<NgtEventManager<any>>) => {
                    this.set((state) => ({ events: { ...state.events, ...events } }));
                }
            });

            this.isInit = true;
            this.#resize();
        }
    }

    destroy(canvas: HTMLCanvasElement) {
      console.log('destroy call')
        setTimeout(() => {
            const {  xr, events } = this.get();
            if (events) {
                if (events.disconnect) {
                  events.disconnect();
                }
                rootStateMap.delete(canvas);
            }
        }, 500);
    }

    #resize() {
        const state = this.get();
        console.log('trigger call')
        const ready = computed(() => ({ isReady: this.get('ready') }));

        effect(
            () => {
                const { isReady } = ready();
                // resize camera and renderer on changes to size and dpr
                console.log(isReady);
            },
            { injector: this.#injector, allowSignalWrites: true }
        );
    }
}

