import { render } from '@testing-library/react';
import Hero from './index';

describe('<Hero /> render without crash', () => {
  test('render without crash', () => {
    const main = render(<Hero />);
    expect(main).toBeTruthy();
  });
});
