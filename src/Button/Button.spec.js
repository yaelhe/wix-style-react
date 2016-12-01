import styles from './Button.scss';
import {componentFactory, driverFactory} from './Button.driver';

describe('Button', () => {
  const {createShallow} = componentFactory();

  it('should click a button', () => {
    const onClick = jest.fn();

    const component = createShallow({onClick});
    const driver = driverFactory(component);
    driver.click();

    expect(onClick).toBeCalled();
  });

  it('should render children', () => {
    const children = '<div>123</div>';

    const component = createShallow({children});
    const driver = driverFactory(component);

    expect(driver.getButtonChildren()).toBe('<div>123</div>');
  });

  it('should get disabled class', () => {
    const disabled = true;

    const component = createShallow({disabled});
    const driver = driverFactory(component);

    expect(driver.isButtonDisabled()).toBe(true);
  });

  it('should have default "fullblue" style', () => {

    const component = createShallow();
    const driver = driverFactory(component);

    expect(driver.doesComponentHasClass(styles.fullblue)).toBe(true);
  });

  it('should get "small" height class', () => {
    const height = `${styles.small}`;

    const component = createShallow({height});
    const driver = driverFactory(component);

    expect(driver.doesComponentHasClass(`height${styles.small}`)).toBe(true);
  });

  it('should get "large" height class', () => {
    const height = `${styles.large}`;

    const component = createShallow({height});
    const driver = driverFactory(component);

    expect(driver.doesComponentHasClass(`height${styles.large}`)).toBe(true);
  });

  it('should get custom style', () => {
    const style = 'emptyblue';

    const component = createShallow({style});
    const driver = driverFactory(component);

    expect(driver.doesComponentHasClass(styles[style])).toBe(true);
  });

  it('should get "hover" class', () => {
    const hover = true;

    const component = createShallow({hover});
    const driver = driverFactory(component);

    expect(driver.isComponentHovered()).toBe(true);
  });
});
