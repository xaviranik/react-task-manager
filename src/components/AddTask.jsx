const AddTask = () => {
  return (
    <form className="flex flex-col mb-8 text-gray-800 text-lg">
      <label htmlFor="task" className="mb-2">
        Task
      </label>
      <input
        id="task"
        type="text"
        className="px-4 py-3 focus:outline-none bg-white rounded-lg shadow-sm focus:shadow-lg mb-2"
      />
      <label htmlFor="day" className="mb-2">
        Day & Time
      </label>
      <input
        id="day"
        type="text"
        className="px-4 py-3 focus:outline-none bg-white rounded-lg shadow-sm focus:shadow-lg mb-2"
      />
      <div className="flex items-center">
        <input type="checkbox" id="reminder" className="mr-3" />
        <label htmlFor="reminder">Reminder</label>
      </div>
    </form>
  );
};

export default AddTask;
