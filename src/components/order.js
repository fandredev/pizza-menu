export default function Order({ closeHour, openHour }) {
  return (
    <p>
      We're open until {closeHour}:00 to {openHour}00. Come visit us order
      online
    </p>
  );
}
