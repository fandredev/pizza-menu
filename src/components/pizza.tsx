import { pizzaData } from '../data';

export default function Pizza() {
  return (
    <ul className="pizzas" data-testid="pizza-component">
      {pizzaData.map((pizza) => {
        return (
          <li
            key={pizza.name}
            className={`pizza ${pizza.soldOut && 'sold-out'}`}
          >
            <img src={pizza.photoName} alt={pizza.name} />
            <div>
              <h3 data-testid="pizzas_name">{pizza.name}</h3>
              <p data-testid="pizzas_incredients">{pizza.ingredients}</p>
              <span>{pizza.soldOut ? 'SOLD OUT' : pizza.price}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
