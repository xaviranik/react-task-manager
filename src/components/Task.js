const Task = ({ task }) => {
  return (
    <div className="bg-white p-6 mb-4 rounded-md shadow-sm">
      <h1 className="text-lg font-medium text-gray-600 mb-2">{task.text}</h1>
      <p className="text-sm text-gray-400">{task.day}</p>
    </div>
  );
};

export default Task;
