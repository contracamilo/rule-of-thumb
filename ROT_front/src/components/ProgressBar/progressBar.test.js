import { render } from '@testing-library/react';
import ProgressBar from './index';

describe('<ProgressBar /> render without crash', () => {
  test('render without crash', () => {
    const main = render(<ProgressBar />);
    expect(main).toBeTruthy();
  });
});
