import { FC, useEffect, useState } from "react";
import DisplayTodo from "./components/DisplayTodo";

const App: FC = () => {
  const [name, setName] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [todo, setTodo] = useState<any>([]);
  const time = new Date().getTime();
  const [number, setNumber] = useState(1);
  const [isdelete, setDelete] = useState(null);

  useEffect(() => {
    const test = todo.filter((item: any) => item.id !== isdelete);
    setTodo(test);
  }, [isdelete]);
  function handleSubmit(e: any) {
    e.preventDefault();
    if (todo && name && detail && deadline) {
      setTodo([
        ...todo,
        {
          name: name,
          detail: detail,
          deadline: deadline,
          id: time,
          number: number,
        },
      ]);
    } else if (name && detail && deadline) {
      setTodo({
        name: name,
        detail: detail,
        deadline: deadline,
        id: time,
        number: number,
      });
    }
    setNumber(number + 1);
  }
  return (
    <div className="w-full min-h-screen bg-gray-400">
      <div>
        <h2 className="font-bold text-xl text-center">
          -- TODO REACT APP WITH <span className="text-green-600">C</span>
          <span className="text-red-600">R</span>
          <span className="text-red-600">U</span>
          <span className="text-green-600">D</span> OPERATIONS --
        </h2>
      </div>
      <div className="w-full flex flex-col items-center">
        <form onSubmit={handleSubmit} className="max-w-xl">
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Task Name"
            className="border-[2px] focus:outline-blue-500 flex my-2 rounded-md py-2 px-4 w-full"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            name=""
            id=""
            required
            placeholder="Task Detail"
            className="border-[2px] focus:outline-blue-500 flex my-2 rounded-md py-2 px-4 w-full"
            onChange={(e) => setDetail(e.target.value)}
          />
          <input
            type="date"
            name=""
            id=""
            className="border-[2px] focus:outline-blue-500 flex my-2 rounded-md py-2 px-4 w-full"
            onChange={(e) => setDeadline(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-500 active:bg-green-600 w-full rounded-md px-4 py-2"
          >
            Add Todo
          </button>
        </form>
      </div>
      <div>
        <DisplayTodo todo={todo} setDelete={setDelete} />
      </div>
    </div>
  );
};

export default App;
