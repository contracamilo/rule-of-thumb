import { render } from '@testing-library/react';
import Footer from './index';

describe('<Footer /> render without crah', () => {
  test('render without crash', () => {
    const main = render(<Footer />);
    expect(main).toBeTruthy();
  });
});
