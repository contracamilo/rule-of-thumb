import { render } from '@testing-library/react';
import MainCard from './index';

describe('<MainCard /> render without crah', () => {
  test('render without crash', () => {
    const main = render(<MainCard />);
    expect(main).toBeTruthy();
  });
});
