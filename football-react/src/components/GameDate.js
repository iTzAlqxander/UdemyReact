import "./GameDate.css";

function GameDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const dayName = props.date.toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="game-date">
      <div className="game-date__dayName">{dayName}</div>
      <div className="game-date__month">{month}</div>
      <div className="game-date__day">{day}</div>
    </div>
  );
}

export default GameDate;
