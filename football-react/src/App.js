import Expenses from "./components/Expenses";
import Title from "./components/Title";


function App() {
  const expenses = [
    {
      id: "e1",
      teamH: "Bears",
      teamA: "Giants",
      scoreH: 8,
      scoreA: 10,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      teamH: "Lions",
      teamA: "Greenbay",
      scoreH: 7,
      scoreA: 7,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      teamH: "Falcons",
      teamA: "Eagles",
      scoreH: 12,
      scoreA: 3,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      teamH: "49ers",
      teamA: "Steelers",
      scoreH: 21,
      scoreA: 14,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div>
      <Title></Title>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
