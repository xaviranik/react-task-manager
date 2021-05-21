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
      reminder: false,
    },
    {
      id: 3,
      text: "Meeting at Office",
      day: "Feb 16th 2021",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="h-screen p-10 bg-gray-100">
      <Header title="Task Manager" />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        <h1 className="text-gray-500 text-xl">No Tasks to show</h1>
      )}
    </div>
  );
}

export default App;
