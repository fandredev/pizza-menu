import { render, screen } from '@testing-library/react';
import Header from '../header';

describe('Header component', () => {
  it('should render the component', async () => {
    render(<Header />);

    const title = screen.getByText(/fast react pizza co./i);
    const correctTag = title.tagName.toLowerCase() === 'h1';

    expect(title).toBeInTheDocument();
    expect(correctTag).toBe(true);
  });
});
