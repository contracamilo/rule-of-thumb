import { render } from '@testing-library/react';
import Thumb from './index';

describe('<Thumb /> render without crash', () => {
  test('<Thumb /> render without crash', () => {
    const main = render(<Thumb />);
    expect(main).toBeTruthy();
  });
});
