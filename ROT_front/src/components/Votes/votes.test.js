import { render } from '@testing-library/react';
import Votes from './index';

describe('<Votes /> render without crash', () => {
  test('<Votes /> render without crash', () => {
    const main = render(<Votes />);
    expect(main).toBeTruthy();
  });
});
