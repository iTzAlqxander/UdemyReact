import GameDate from './GameDate';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <div className='expense-item'>
      <GameDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.teamH + " @ " + props.teamA}</h2>
        <div className='expense-item__price'>{props.scoreH.toString() + " - " + props.scoreA.toString()}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;