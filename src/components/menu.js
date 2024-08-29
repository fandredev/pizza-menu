import { pizzaData } from '../data';
import Pizza from './pizza';

export default function Menu() {
  const hasPizzas = pizzaData.length > 0;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {hasPizzas ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>
          <Pizza />
        </>
      ) : (
        <p>We're still working on our menu. Please come back later</p>
      )}
    </main>
  );
}
