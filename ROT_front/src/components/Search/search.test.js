import { render } from '@testing-library/react';
import Search from './index';

describe('<Search /> render without crash', () => {
  test('render without crash', () => {
    const main = render(<Search />);
    expect(main).toBeTruthy();
  });
});
