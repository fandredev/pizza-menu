import { render, screen } from '@testing-library/react';
import Pizza from '../pizza';

describe('Pizza component', () => {
  it('should render the component', () => {
    render(<Pizza />);

    const pizzaElements = screen.getAllByRole('listitem');
    expect(pizzaElements.length).toBe(6);
  });

  it('should render the component with correct pizza names', () => {
    render(<Pizza />);

    const pizzasName = screen.getAllByTestId('pizzas_name');
    const textPizzas = pizzasName.map((pizza) => pizza.textContent);

    expect(textPizzas).toEqual([
      'Focaccia',
      'Pizza Margherita',
      'Pizza Spinaci',
      'Pizza Funghi',
      'Pizza Salamino',
      'Pizza Prosciutto',
    ]);
  });

  it('should render the component with correct pizza ingredients', () => {
    render(<Pizza />);

    const pizzasIngredients = screen.getAllByTestId('pizzas_incredients');
    const textIngredients = pizzasIngredients.map((pizza) => pizza.textContent);

    expect(textIngredients).toEqual([
      'Bread with italian olive oil and rosemary',
      'Tomato and mozarella',
      'Tomato, mozarella, spinach, and ricotta cheese',
      'Tomato, mozarella, mushrooms, and onion',
      'Tomato, mozarella, and pepperoni',
      'Tomato, mozarella, ham, aragula, and burrata cheese',
    ]);
  });
});
