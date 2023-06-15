import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTaks, editTaks } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  // const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, [params.id]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (params.id) {
      dispatch(editTaks({ ...task }));
      navigate("/");
    } else {
      dispatch(addTaks({ ...task, id: uuid() }));
      navigate("/");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-sm p-4">
      <label htmlFor="title" className="block text-xs font-bold mb-2">
        Title :{" "}
      </label>
      <input
        type="text"
        placeholder="title"
        name="title"
        onChange={handleChange}
        value={task.title}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      />
      <label htmlFor="description" className="block text-xs font-bold mb-2">
        Description :{" "}
      </label>
      <textarea
        name="description"
        placeholder="description"
        onChange={handleChange}
        value={task.description}
        className="w-full p-2 rounded-md bg-zinc-600 mb-2"
      ></textarea>
      <button type="submit" className="bg-indigo-600 px-2 py-1">
        {params.id ? "Editar" : "Enviar"}
      </button>
    </form>
  );
}

export default TaskForm;
