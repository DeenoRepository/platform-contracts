export interface IAuthProvider {
  readonly name: string;
  authenticate(credentials: Record<string, unknown>): Promise<{ userId: string; roles: string[] } | null>;
}
