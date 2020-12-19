import { render } from '@testing-library/react';
import Btn from '../../components/Button';

describe('Button component tests', () => {
  test('render without crash', () => {
    const main = render(<Btn />);
    expect(main).toBeTruthy();
  });
});
