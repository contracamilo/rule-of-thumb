import { render } from '@testing-library/react';
import Nav from './index';

describe('<Nav /> render without crash', () => {
  test('render without crash', () => {
    const main = render(<Nav />);
    expect(main).toBeTruthy();
  });
});
