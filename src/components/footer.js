import Order from './order';

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 23;

  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      <div className="order">
        <p>
          {isOpen ? (
            <Order closeHour={closeHour} openHour={openHour} />
          ) : (
            <p>
              `We're closed. We open at ${openHour}:00. Come visit us order
              online`
            </p>
          )}
        </p>

        <button className="btn">Order</button>
      </div>
    </footer>
  );
  // return React.createElement('footer', null, "We're open currently open");
}
