import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`bg-white p-6 mb-4 rounded-md shadow-sm cursor-pointer ${
        task.reminder ? "border-l-4 border-blue-500 shadow-md" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="flex justify-between items-center text-lg font-medium text-gray-600 mb-2">
        <h1>{task.text}</h1>
        <FaTimes
          className="text-red-500 cursor-pointer"
          onClick={() => onDelete(task.id)}
        />
      </div>
      <p className="text-sm text-gray-400">{task.day}</p>
    </div>
  );
};

export default Task;
