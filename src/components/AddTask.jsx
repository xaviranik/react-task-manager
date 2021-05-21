import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add task");
      return;
    }

    onAdd({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form
      className="flex flex-col mb-8 text-gray-800 text-md"
      onSubmit={onSubmit}
    >
      <label htmlFor="task" className="mb-2">
        Task
      </label>
      <input
        id="task"
        type="text"
        autoComplete="off"
        className="px-4 py-3 focus:outline-none bg-white rounded-lg shadow-sm focus:shadow-lg mb-3"
        placeholder="Add Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label htmlFor="day" className="mb-2">
        Day & Time
      </label>
      <input
        id="day"
        type="text"
        autoComplete="off"
        className="px-4 py-3 focus:outline-none bg-white rounded-lg shadow-sm focus:shadow-lg mb-3"
        placeholder="Desired Day & Time"
        value={day}
        onChange={(e) => setDay(e.target.value)}
      />
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="reminder"
          className="mr-3"
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
        <label htmlFor="reminder">Reminder</label>
      </div>
      <button className="bg-gray-900 text-white rounded-lg py-3 hover:shadow-lg focus:outline-none">
        Save Task
      </button>
    </form>
  );
};

export default AddTask;
