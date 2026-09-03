import { DomainEventEnvelope } from './event-bus.js';

export function createDomainEvent<T>(
  type: string,
  payload: T,
  producer = 'system',
  correlationId = crypto.randomUUID()
): DomainEventEnvelope<T> {
  return {
    id: crypto.randomUUID(),
    type,
    producer,
    timestamp: new Date().toISOString(),
    correlationId,
    version: 1,
    payload
  };
}
