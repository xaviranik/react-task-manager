import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Play Valorant",
      day: "Feb 5th 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Go shopping with Bae",
      day: "Feb 9th 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "Meeting at Office",
      day: "Feb 16th 2021",
      reminder: true,
    },
  ]);

  return (
    <div className="h-screen p-10 bg-gray-100">
      <Header title="Task Manager" />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
