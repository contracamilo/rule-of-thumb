import { render, screen } from '@testing-library/react';
import Main from '../../pages/main';

describe('main component tests', () => {
  test('render without crash', () => {
    const main = render(<Main />);
    expect(main).toBeTruthy();
  });

  test('renders isHealthy text', () => {
    render(<Main />);
    const linkElement = screen.getByText(/isHealthy/i);
    expect(linkElement).toBeInTheDocument();
  });
});
