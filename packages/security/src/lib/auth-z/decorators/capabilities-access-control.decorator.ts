import { SetMetadata } from '@nestjs/common';

/**
 * Specify the capabilities that must match the user's permissions in order to use
 * the method that is decorated.
 *
 * @param capabilities - Capabilities required for decorated endpoint to execute
 * @returns CustomDecorator | any
 * @public
 */
export const CapabilitiesAccessControl = (...capabilities: string[]): any => {
  return SetMetadata('requiredCapabilities', capabilities);
};
