export interface IAuditLogger {
  log(action: string, actorId: string, resource: string, details?: Record<string, unknown>): Promise<void>;
}
