import { SignalStore } from "./stores/signal.store";

export type VgAnyRecord = Record<string, any>;
export type DomEvent = PointerEvent | MouseEvent | WheelEvent;
export type FilterFunction = (items: any[], store: SignalStore<VgState>) => any[];
export type NgtEventManager<T> = {
  /** Determines if the event layer is active */
  enabled: boolean;
  /** Event layer priority, higher prioritized layers come first and may stop(-propagate) lower layer  */
  priority: number;
  /** The compute function needs to set up the raycaster and an xy- pointer  */
  compute?: ComputeFunction;
  /** The filter can re-order or re-structure the intersections  */
  filter?: FilterFunction;
  /** The target node the event layer is tied to */
  connected?: T;
  /** Allows re-connecting to another target */
  connect?: (target: T) => void;
  /** Removes all existing events handlers from the target */
  disconnect?: () => void;
  /** Triggers a onPointerMove with the last known event. This can be useful to enable raycasting without
   *  explicit user interaction, for instance when the camera moves a hoverable object underneath the cursor.
   */
  update?: () => void;
};
export type ComputeFunction = (
  event: DomEvent,
  root: SignalStore<VgState>,
  previous?: SignalStore<VgState>
) => void;
export type VgState = {
  get: SignalStore<VgState>['get'];
  set: SignalStore<VgState>['set'];
  ready: boolean;
  events: NgtEventManager<any>;
  xr: { connect: () => void; disconnect: () => void };
  controls: any | null;
  setEvents: (events: Partial<NgtEventManager<any>>) => void;
  previousStore?: SignalStore<VgState>;
};
