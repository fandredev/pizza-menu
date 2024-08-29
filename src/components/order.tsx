interface OrderProps {
  closeHour: number;
  openHour: number;
}

export default function Order({ closeHour, openHour }: OrderProps) {
  return (
    <p>
      We're open until {closeHour}:00 to {openHour}00. Come visit us order
      online
    </p>
  );
}
