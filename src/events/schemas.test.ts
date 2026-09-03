import { describe, it, expect } from 'vitest';
import { StockIssuedPayloadSchema } from './schemas.js';
import { createDomainEvent } from './domain-event.js';

describe('Contracts Schema Validation (TDD)', () => {
  it('validates stock issued event payload correctly', () => {
    const valid = {
      itemId: 'SKU-100',
      warehouseId: 'WH-MAIN',
      quantity: 5,
      recipient: 'Engineer Petrov'
    };
    expect(StockIssuedPayloadSchema.parse(valid)).toEqual(valid);
  });

  it('rejects invalid payload with non-positive quantity', () => {
    const invalid = {
      itemId: 'SKU-100',
      warehouseId: 'WH-MAIN',
      quantity: -2,
      recipient: 'Engineer Petrov'
    };
    expect(() => StockIssuedPayloadSchema.parse(invalid)).toThrow();
  });

  it('generates a compliant domain event envelope', () => {
    const event = createDomainEvent('wms.stock.issued', { test: true }, 'module-wms');
    expect(event.id).toBeDefined();
    expect(event.type).toBe('wms.stock.issued');
    expect(event.producer).toBe('module-wms');
    expect(event.version).toBe(1);
  });
});
