import ExpenseItem from './ExpenseItem';
import './Expenses.css';

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        teamH={props.items[0].teamH}
        teamA={props.items[0].teamA}
        scoreH={props.items[0].scoreH}
        scoreA={props.items[0].scoreA}
        date={props.items[0].date}
      />
      <ExpenseItem
        teamH={props.items[1].teamH}
        teamA={props.items[1].teamA}
        scoreH={props.items[1].scoreH}
        scoreA={props.items[1].scoreA}
        date={props.items[1].date}
      />
      <ExpenseItem
        teamH={props.items[2].teamH}
        teamA={props.items[2].teamA}
        scoreH={props.items[2].scoreH}
        scoreA={props.items[2].scoreA}
        date={props.items[2].date}
      />
      <ExpenseItem
        teamH={props.items[3].teamH}
        teamA={props.items[3].teamA}
        scoreH={props.items[3].scoreH}
        scoreA={props.items[3].scoreA}
        date={props.items[3].date}
      />
    </div>
  );
}

export default Expenses;