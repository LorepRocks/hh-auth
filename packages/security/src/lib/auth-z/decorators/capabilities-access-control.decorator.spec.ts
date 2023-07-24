import { CapabilitiesAccessControl } from './capabilities-access-control.decorator';
import { InvalidDecoratorItemException } from '@nestjs/common/utils/validate-each.util';

describe('@CapabilitiesAccessControl', () => {
  const capabilities = ['read:sms', 'write:sms'];

  @CapabilitiesAccessControl(...capabilities)
  class Test {}

  class TestWithMethod {
    @CapabilitiesAccessControl(...capabilities)
    public static test() {}
  }

  it('should enhance class with expected requiredCapabilities array', () => {
    const metadata = Reflect.getMetadata('requiredCapabilities', Test);
    expect(metadata).toEqual(capabilities);
  });

  it('should enhance method with expected requiredCapabilities array', () => {
    const metadata = Reflect.getMetadata(
      'requiredCapabilities',
      TestWithMethod.test
    );
    expect(metadata).toEqual(capabilities);
  });

  it('should throw exception when object is invalid', () => {
    try {
      CapabilitiesAccessControl(<any>42)(() => {});
    } catch (e) {
      expect(e).toBeInstanceOf(InvalidDecoratorItemException);
    }
  });
});
