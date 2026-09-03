export interface DomainEventEnvelope<T = unknown> {
  readonly id: string;
  readonly type: string;
  readonly producer: string;
  readonly timestamp: string;
  readonly correlationId: string;
  readonly version: number;
  readonly payload: T;
}

export type EventHandler<T = unknown> = (event: DomainEventEnvelope<T>) => Promise<void> | void;

export interface ISubscription {
  unsubscribe(): void | Promise<void>;
}

export interface IEventBus {
  publish<T>(type: string, payload: T, metadata?: { correlationId?: string; producer?: string }): Promise<void>;
  subscribe<T>(type: string, handler: EventHandler<T>): ISubscription | Promise<ISubscription>;
}

export interface IRedisStreamsOptions {
  readonly streamKey: string;
  readonly consumerGroup: string;
  readonly consumerName: string;
  readonly maxLen?: number;
}
