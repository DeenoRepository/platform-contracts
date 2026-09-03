import { z } from 'zod';

export const StockIssuedPayloadSchema = z.object({
  itemId: z.string().min(1),
  warehouseId: z.string().min(1),
  quantity: z.number().positive(),
  recipient: z.string().min(1)
});

export const MaintenanceCompletedPayloadSchema = z.object({
  workOrderId: z.string().min(1),
  equipmentId: z.string().min(1),
  completedAt: z.string(),
  operatingHours: z.number().nonnegative()
});

export const EquipmentCreatedPayloadSchema = z.object({
  equipmentId: z.string().min(1),
  inventoryNumber: z.string().min(1),
  name: z.string().min(1),
  location: z.string().min(1)
});

export const ProcurementApprovedPayloadSchema = z.object({
  orderId: z.string().min(1),
  totalAmount: z.number().positive(),
  approvedBy: z.string().min(1)
});
