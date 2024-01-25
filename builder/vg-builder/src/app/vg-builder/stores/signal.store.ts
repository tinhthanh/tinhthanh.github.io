import {
    Inject,
    Injectable,
    Optional,
    computed,
    signal,
    untracked,
    type CreateComputedOptions,
    type Signal,
    type WritableSignal,
} from '@angular/core';
import type { VgAnyRecord } from '../types';

const STORE_COMPUTED_KEY = '__ngt_store_computed__' as const;

@Injectable()
export class SignalStore<T extends object> {
    readonly #state: WritableSignal<T>;
    readonly #computedCache = new Map();
    readonly state: Signal<T>;

    constructor(
        @Optional()
        @Inject('INITIAL_STATE')
        initialState: Partial<T> = {} as unknown as Partial<T>
    ) {
      console.log('con hang init')
        initialState ??= {};
        this.#state = signal(Object.assign(initialState, { __ngt_dummy_state__: Date.now() }) as T);
        this.state = this.#state.asReadonly();
    }

    select<
        T1 extends keyof T,
        T2 extends keyof T[T1],
        T3 extends keyof T[T1][T2],
        T4 extends keyof T[T1][T2][T3]
    >(
        key1: T1,
        key2: T2,
        key3: T3,
        key4: T4,
        options?: CreateComputedOptions<T[T1][T2][T3][T4]>
    ): Signal<T[T1][T2][T3][T4]>;
    select<T1 extends keyof T, T2 extends keyof T[T1], T3 extends keyof T[T1][T2]>(
        key1: T1,
        key2: T2,
        key3: T3,
        options?: CreateComputedOptions<T[T1][T2][T3]>
    ): Signal<T[T1][T2][T3]>;
    select<T1 extends keyof T, T2 extends keyof T[T1]>(
        key1: T1,
        key2: T2,
        options?: CreateComputedOptions<T[T1][T2]>
    ): Signal<T[T1][T2]>;
    select<TKey extends keyof T>(key: TKey, options?: CreateComputedOptions<T[TKey]>): Signal<T[TKey]>;
    select(options?: CreateComputedOptions<T>): Signal<T>;
    select(...keysAndOptions: any[]) {
        if (keysAndOptions.length === 0) return this.state;
        if (keysAndOptions.length === 1 && typeof keysAndOptions[0] === 'object') {
            if (!this.#computedCache.has(STORE_COMPUTED_KEY)) {
                this.#computedCache.set(
                    STORE_COMPUTED_KEY,
                    computed(this.state, keysAndOptions as CreateComputedOptions<T>)
                );
                return this.#computedCache.get(STORE_COMPUTED_KEY)!;
            }
        }
        const [keys, options] = parseOptions(keysAndOptions);

        const joinedKeys = keys.join('-');

        if (!this.#computedCache.has(joinedKeys)) {
            this.#computedCache.set(
                joinedKeys,
                computed(() => keys.reduce((value, key) => (value as VgAnyRecord)[key], this.state()), options)
            );
        }

        return this.#computedCache.get(joinedKeys)!;
    }

    get<
        T1 extends keyof T,
        T2 extends keyof T[T1],
        T3 extends keyof T[T1][T2],
        T4 extends keyof T[T1][T2][T3]
    >(key1: T1, key2: T2, key3: T3, key4: T4): T[T1][T2][T3][T4];
    get<T1 extends keyof T, T2 extends keyof T[T1], T3 extends keyof T[T1][T2]>(
        key1: T1,
        key2: T2,
        key3: T3
    ): T[T1][T2][T3];
    get<T1 extends keyof T, T2 extends keyof T[T1]>(key1: T1, key2: T2): T[T1][T2];
    get<TKey extends keyof T>(key: TKey): T[TKey];
    get(): T;
    get(...keys: string[]) {
        const state = untracked(this.state);
        if (keys.length === 0) return state;
        return keys.reduce((value, key) => (value as VgAnyRecord)[key], state);
    }

    set(state: Partial<T> | ((previous: T) => Partial<T>)) {
        const updater = (previous: T) => {
            const partial = typeof state === 'function' ? state(previous) : state;
            Object.keys(partial).forEach((key) => {
                const partialKey = key as keyof T;
                if (partial[partialKey] === undefined && previous[partialKey] != null) {
                    partial[partialKey] = previous[partialKey];
                }
            });
            return partial;
        };
        this.#state.update((previous) => ({ ...previous, ...updater(previous) }));
        // this.#state.update(previous => ({...previous, ...(typeof state === 'function' ? state(previous) : state)}))
    }

    patch(state: Partial<T>) {
        const updater = (previous: T) => {
            Object.keys(state).forEach((key) => {
                const partialKey = key as keyof T;
                if (state[partialKey] === undefined && previous[partialKey] != null) {
                    state[partialKey] = previous[partialKey];
                }
            });
            return state;
        };
        this.#state.update((previous) => ({ ...updater(previous), ...previous }));
    }
}

function parseOptions(keysAndOptions: any[]): [string[], CreateComputedOptions<any>?] {
    // if (typeof keysAndOptions.at(-1) === 'object') {
    //     return [keysAndOptions.slice(0, -1), keysAndOptions.at(-1)];
    // }

    return [keysAndOptions];
}
