import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

type Todo = {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
};

export default function TodoList() {
  const navigate = useNavigate();
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState("");
  const [edit, setEdit] = useState("");
  const [editTodoId, setEditTodoId] = useState(0);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    // access_token을 사용하여 로그인 상태를 확인하거나 필요한 작업을 수행할 수 있습니다.
    if (!access_token) {
      // 로그인 상태이므로 리다이렉트 등 필요한 작업을 수행하세요.
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");
    console.log(access_token);

    const fetchTodos = async () => {
      try {
        const response = await axios.get<Todo[]>("https://www.pre-onboarding-selection-task.shop/todos", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });

        setTodos(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<{ message: string }>;
          console.error("Error fetching todos:", axiosError.message);
        } else {
          console.error("Error fetching todos:", error);
        }
      }
    };

    fetchTodos();
  }, []);

  const createTodo = async () => {
    const access_token = localStorage.getItem("access_token");

    try {
      const response = await axios.post<Todo>(
        "https://www.pre-onboarding-selection-task.shop/todos",
        { todo: todo },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTodos([...todos, response.data]);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.error("Error creating todo:", axiosError.message);
      } else {
        console.error("Error creating todo:", error);
      }
    }
  };

  const deleteTodo = async (id: number) => {
    const access_token = localStorage.getItem("access_token");

    try {
      await axios.delete(`https://www.pre-onboarding-selection-task.shop/todos/${id}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });

      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.error("Error deleting todo:", axiosError.message);
      } else {
        console.error("Error deleting todo:", error);
      }
    }
  };

  const updateTodoStatus = async (newTodo: Todo) => {
    const access_token = localStorage.getItem("access_token");

    try {
      const response = await axios.put(
        `https://www.pre-onboarding-selection-task.shop/todos/${newTodo.id}`,
        { todo: newTodo.todo, isCompleted: newTodo.isCompleted },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === newTodo.id ? { ...todo, newTodo } : todo)));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message: string }>;
        console.error("Error updating todo status:", axiosError.message);
      } else {
        console.error("Error updating todo status:", error);
      }
    }
  };

  const checkTodo = async (todo: Todo) => {
    const updatedTodos = todos.map((item) => (item.id === todo.id ? { ...item, isCompleted: !item.isCompleted } : item));
    await setTodos(updatedTodos);
    todo.isCompleted = !todo.isCompleted;
    await updateTodoStatus(todo);
  };

  const editOpen = (todo: Todo) => {
    setEditTodoId(todo.id);
    setEdit(todo.todo);
    console.log(todos);
    console.log(editTodoId);
  };

  const editClose = async (todo: Todo) => {
    setEditTodoId(0);
    const updatedTodos = todos.map((item) => (item.id === todo.id ? { ...item, todo: edit } : item));
    await setTodos(updatedTodos);
    todo.todo = edit;
    await updateTodoStatus(todo);
    console.log(todos);
    console.log(editTodoId);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    navigate("/signin");
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 gap-10 items-center">
      <button
        onClick={logout}
        className="absolute top-3 right-3 px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
      >
        로그아웃
      </button>

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">Todo</h2>
      </div>

      <div className="col-span-full max-w-xl w-full">
        <div className="mt-2 flex-row flex gap-2">
          <input
            type="text"
            name="todo"
            id="todo"
            onChange={(e) => setTodo(e.target.value)}
            autoComplete="todo"
            data-testid="new-todo-input"
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <button
            type="button"
            onClick={createTodo}
            data-testid="new-todo-add-button"
            className="flex-none px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            추가
          </button>
        </div>
      </div>

      <ul role="list" className="w-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg">
        {todos.map((todo) => (
          <li key={todo.id} className="w-full border-b border-gray-200 rounded-t-lg ">
            {editTodoId !== todo.id ? (
              <div className="flex items-center pl-3">
                <input
                  id={`checkbox-${todo.id}`}
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={(e) => checkTodo(todo)}
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />

                <label htmlFor={`checkbox-${todo.id}`} className="w-full py-3 ml-2 text-sm font-medium text-gray-900">
                  {todo.todo}
                </label>
                <button type="button" onClick={(e) => editOpen(todo)} data-testid="modify-button" className="flex-none px-3 py-2 text-sm text-black font-bold">
                  ✏️ 수정
                </button>
                <button type="button" onClick={() => deleteTodo(todo.id)} data-testid="delete-button" className="flex-none px-3 py-2 text-sm text-black font-bold">
                  ❌ 삭제
                </button>
              </div>
            ) : (
              <div className="flex items-center pl-3">
                <input
                  type="text"
                  name="todo"
                  id="todo"
                  value={edit}
                  onChange={(e) => setEdit(e.target.value)}
                  autoComplete="todo"
                  data-testid="modify-input"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                <button data-testid="submit-button" type="button" onClick={(e) => editClose(todo)} className="flex-none px-3 py-2 text-sm text-black font-bold">
                  ✔️ 저장
                </button>
                <button data-testid="cancel-button" type="button" onClick={() => setEditTodoId(0)} className="flex-none px-3 py-2 text-sm text-black font-bold">
                  😕 취소
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
