import "./App.css";

export default function App() {
  const [todos, settodos] = useState([
    {
      id: 1,
      title: "Buy Milk",
      done: false
    }
  ]);
  const [title, setTitle] = useState([]);
  return (
    <div className="App">
      <h1>To Do List App</h1>
      <form>
        <input placeholder="Enter new task"></input>
        <button>New task</button>
      </form>
      <ul>
        <li>
          Task 1 <input type="checkbox" />
          <button>Delete</button>
        </li>
        <li>
          Task 2 <input type="checkbox" />
          <button>Delete</button>
        </li>
      </ul>
    </div>
  );
}
