import { IEventBus } from '../events/event-bus.js';

export interface IPlatformContext {
  readonly eventBus: IEventBus;
  readonly moduleDbUrl: string;
  registerNavigation(item: { id: string; title: string; path: string; icon?: string; permission?: string }): void;
}

export interface IModuleBootstrap {
  readonly id: string;
  readonly version: string;
  onInit(context: IPlatformContext): Promise<void>;
  onStart(): Promise<void>;
  onStop(): Promise<void>;
}
