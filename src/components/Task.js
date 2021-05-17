import { FaTimes } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-md shadow-sm">
      <div className="flex justify-between items-center text-lg font-medium text-gray-600 mb-2">
        <h1>{task.text}</h1>
        <FaTimes className="text-red-500" />
      </div>
      <p className="text-sm text-gray-400">{task.day}</p>
    </div>
  );
};

export default Task;
