import { render, screen } from '@testing-library/react';
import Menu from '../menu';

import * as pizzaModule from '../../data';

describe('Menu component', () => {
  it('should render the component with pizzas', () => {
    render(<Menu />);

    const menuHeading = screen.getByRole('heading', { level: 2 });
    const menuDescription = screen.getByText(/Authentic Italian cuisine/i);
    const pizzaComponent = screen.getByTestId('pizza-component');

    expect(menuHeading).toBeInTheDocument();
    expect(menuDescription).toBeInTheDocument();
    expect(pizzaComponent).toBeInTheDocument();
  });
});
