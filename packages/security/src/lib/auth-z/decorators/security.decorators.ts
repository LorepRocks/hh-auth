import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';

/**
 * @public
 */
export interface AccessControlsDefinition {
  sources?: string[];
  roles?: string[];
  permissions?: string[];
}

/**
 * Request method Decorator.  Sets a user object.
 *
 * @remarks
 * When a JWT is validated by Passport, the returned values are added
 * to the raw request object as a "user" property. This decorator will
 * pluck it off for you.
 *
 * @example
 * ```ts
 * interface ValidUserClaims {
 *   uuid: string;
 *   email: string;
 * }
 *
 * @User() user: ValidUserClaims
 *```
 *
 * @public
 */
export const User = createParamDecorator(
  (_: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
  }
);

/**
 * Sets allowed roles as metadata on the request.
 *
 * @remarks
 * Using this decorator will allow a guard to pick the allowed
 * roles off the request object and validate against the user object set by a
 * jwt auth guard.
 *
 * @example
 * ```ts
 * // add single role
 * @Roles('admin')
 * // add multiple roles
 * @Roles(['admin', 'coach'])
 *```
 *
 * @public
 * @param roles - list of roles to assign
 */
export function Roles(...roles: string[]): MethodDecorator {
  return SetMetadata('roles', roles);
}

/**
 * Sets allowed sources as metadata on the request.
 *
 * @remarks
 * Using this decorator will allow a guard to pick the allowed
 * source off the request object and validate against the user object set by a
 * jwt auth guard.
 *
 * @example
 * ```ts
 * // add single role
 * @Sources('phoenix')
 * // add multiple roles
 * @Sources(['configurator', 'phoenix'])
 *```
 *
 * @public
 * @param sources - list of roles to assign
 */
export function Sources(...sources: string[]): MethodDecorator {
  return SetMetadata('sources', sources);
}

/**
 * Sets required permissions as metadata on the request.
 *
 * @remarks
 * Using this decorator will allow a permissions guard to pick the allowed
 * source off the request object and validate against the user object set by a
 * jwt auth guard.
 *
 * @example
 * ```ts
 * // add single permission
 * @Permissions('activityPlan:read')
 * // add multiple permissions
 * @Permissions(['activityPlan:edit', 'activityPlan:read'])
 *```
 *
 * @public
 * @param sources - list of roles to assign
 */
export function Permissions(...permissions: string[]): MethodDecorator {
  return SetMetadata('permissions', permissions);
}

/**
 * Sets a combination of access controls as a single object as metadata
 * on the request object.
 *
 * @remarks
 * Using this decorator will allow a guard to pick the allowed
 * source off the request object and validate against the user object set by a
 * jwt auth guard.
 *
 * @example
 * ```ts
 * @AccessControls({
 *   source: AcceptedSources.C10R,
 *   roles: [AcceptedRoles.C10R_USER],
 *   permissions: ["activityPlan:edit", "activityPlan:read"],
 * });
 *```
 *
 * @public
 * @param accessControls - object with relevant access controls
 */
export function AccessControl(
  accessControls: AccessControlsDefinition
): MethodDecorator {
  return SetMetadata('accessControls', accessControls);
}
