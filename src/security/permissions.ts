export interface IUserContext {
  readonly id: string;
  readonly username: string;
  readonly roles: readonly string[];
  readonly permissions: readonly string[];
}

export interface IPermissionChecker {
  hasPermission(user: IUserContext, permission: string): boolean;
}
