import { render } from '@testing-library/react';
import Loader from './index';

describe('<Loader /> render without crash', () => {
  test('render without crash', () => {
    const main = render(<Loader />);
    expect(main).toBeTruthy();
  });
});
