import { render, screen } from '@testing-library/react';
import Order from '../order';

describe('Order component', () => {
  it('should render the component with correct open and close hours', () => {
    const closeHour = 20;
    const openHour = 10;
    render(<Order closeHour={closeHour} openHour={openHour} />);

    const orderText = screen.getByText(
      `We're open until ${closeHour}:00 to ${openHour}00. Come visit us order online`
    );

    expect(orderText).toBeInTheDocument();
  });
});
