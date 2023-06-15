import { useSelector } from "react-redux";
import { deleteTaks } from "../features/tasks/taskSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  console.log(tasks);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteTaks(id));
  };
  return (
    <div className="w-4/6">
      <header className="flex justify-between items-center py-4">
        <h1>Task {tasks.length}</h1>
        <Link
          to="/create-task"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm"
        >
          Create Task
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {tasks.map((e) => (
          <div key={e.id} className="bg-neutral-800 p-4 rounded-md">
            <header className="flex justify-between">
              <h3>{e.title}</h3>
              <div className="flex gap-x-2">
                <Link
                  to={`edit-task/${e.id}`}
                  className="bg-zinc-600 px-2 py-1  text-xs rounded-md"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(e.id)}
                  className="bg-red-500 px-2 py-1 text-xs rounded-md"
                >
                  Delete
                </button>
              </div>
            </header>
            <p>{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
