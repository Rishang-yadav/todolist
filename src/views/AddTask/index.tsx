/*****add api helper */

// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { AddTodo } from "@/apihelper/addTodo";
// import { DeleteTodo } from "@/apihelper/DeleteTodo";
// import { UpdateTodo } from "@/apihelper/Updatetodo";

// interface Todo {
//   _id: string;
//   title: string;
//   completed: boolean;
// }

// export function AddTask() {
//   const [todos, setTodos] = useState<Todo[]>([]);
//   const [newTodo, setNewTodo] = useState<string>("");
//   const [editingId, setEditingId] = useState<string | null>(null);
//   const [editTitle, setEditTitle] = useState<string>("");

//   // Fetch todos when the component mounts
//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const res = await axios.get("/api/todos");
//         console.log("Fetched todos:", res.data.response);
//         setTodos(res.data.response);
//       } catch (error) {
//         console.error("Error fetching todos:", error);
//       }
//     };
//     fetchTodos();
//   }, []);

//   // Add a new todo
//   const addTodo = async () => {
//     try {
//       const todoData = await AddTodo({ title: newTodo });
//       console.log(todoData, "todoData");
//       // setTodos([...todos, todoData]);
//       // setNewTodo('');
//     } catch (error) {
//       console.error("Error adding todo:", error);
//     }
//   };

//   const deleteTodo = async (id: string) => {
//     try {
//       await DeleteTodo(id);
//       setTodos(todos.filter((t) => t._id !== id));
//     } catch (error) {
//       console.error("Error deleting todo:", error);
//     }
//   };

//  // Delete a todo
//   // const deleteTodo = async (id: string) => {
//   //   try {
//   //     await axios.delete(`/api/todos/${id}`, {
//   //       data: { id },
//   //     });
//   //     setTodos(todos.filter((t) => t._id !== id));
//   //   } catch (error) {
//   //     console.error("Error deleting todo:", error);
//   //   }
//   // };

//   //update api helper
//   const updateTodo = async (id: string) => {
//     try {
//       const updatedTodo = await UpdateTodo(id, editTitle);
//       setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)));
//       setEditingId(null);
//       setEditTitle("");
//     } catch (error) {
//       console.error("Error updating todo:", error);
//     }
//   };

//   // Update todo title
//   // const updateTodo = async (id: string) => {
//   //   try {
//   //     const res = await axios.put(`/api/todos/${id}`, {
//   //       title: editTitle,
//   //       id: editingId,
//   //     });
//   //     setTodos(todos.map((t) => (t._id === id ? res.data : t)));
//   //     setEditingId(null);
//   //     setEditTitle("");
//   //   } catch (error) {
//   //     console.error("Error updating todo:", error);
//   //   }
//   // };

//   return (
//     <div className="w-full flex flex-col justify-center items-center  p-4">
//       <div className="flex justify-center items-center gap-4">
//         <div className="">
//           <input
//             type="text"
//             value={newTodo}
//             onChange={(e) => setNewTodo(e.target.value)}
//             placeholder="Add a new task"
//             className="input w-full max-w-xs"
//           />
//         </div>
//         <div>
//           <button
//             className="btn mb-2 p-1 bg-blue-500 text-white rounded"
//             onClick={addTodo}
//           >
//             Add Todo
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//       <table className="table">
//         {todos.map((todo) => (
//           <div key={todo._id} className="flex w-full ">
//             {editingId === todo._id ? (
//               <div>
//                 <input
//                   type="text"
//                   value={editTitle}
//                   onChange={(e) => setEditTitle(e.target.value)}
//                   className="flex-grow mr-2 p-2 border border-gray-300 rounded"
//                 />
//                 <button
//                   className="mr-2 p-2 bg-green-500 text-white rounded"
//                   onClick={() => updateTodo(todo._id)}
//                 >
//                   Save
//                 </button>
//                 <button
//                   className="p-2 bg-gray-500 text-white rounded"
//                   onClick={() => {
//                     setEditingId(null);
//                     setEditTitle("");
//                   }}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             ) : (
//               <div className="w-full flex space-between p-6">
//                 <div className=" w-4/12 text-center flex gap-5">{todo.title}</div>
//                 <div className=" w-4/12 flex gap-5">
//                   <button
//                     className="mr-2 p-2 bg-yellow-500 text-white rounded"
//                     onClick={() => {
//                       setEditingId(todo._id);
//                       setEditTitle(todo.title);
//                     }}
//                   >
//                     Update
//                   </button>
//                 </div>
//                 <div className=" w-4/12 flex gap-5">
//                   <button
//                     className="p-2 bg-red-500 text-white rounded"
//                     onClick={() => deleteTodo(todo._id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//          </table>
//       </div>
//     </div>
//   );
// }

/***************************** */
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { AddTodo } from "@/apihelper/addTodo";
import { DeleteTodo } from "@/apihelper/DeleteTodo";
import { UpdateTodo } from "@/apihelper/Updatetodo";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { IoIosSave } from "react-icons/io";
import { MdOutlineCancelPresentation } from "react-icons/md";



interface Todo {
  _id: string;
  title: string;
  completed: boolean;
}

export function AddTask() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  // Fetch todos when the component mounts
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    try {
      const res = await axios.get("/api/todos");
      console.log("Fetched todos:", res.data.response);
      setTodos(res.data.response);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Add a new todo
  const addTodo = async () => {
    try {
      const todoData = await AddTodo({ title: newTodo });
      console.log(todoData, "todoData");
      fetchTodos();
      // setTodos([...todos, todoData]);
      setNewTodo("");
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  //delete api helper
  const deleteTodo = async (id: string) => {
    try {
      await DeleteTodo(id);
      setTodos(todos.filter((t) => t._id !== id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  //update api helper
  const updateTodo = async (id: string) => {
    try {
      const updatedTodo = await UpdateTodo(id, editTitle);
      // setTodos(todos.map((t) => (t._id === id ? updatedTodo : t)));
      setEditingId(null);
      setEditTitle("");
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  return (
    <div className="w-[500px] p-10 text-lg text-center flex flex-col gap-4 bg-emerald-100">
      <div className="flex justify-center items-center gap-4">
        <div className="">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new task"
            className="input w-full max-w-xs"
          />
        </div>
        <div>
          <button className=" btn bg-red-400" onClick={addTodo}>
          <IoMdAdd />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table py-5">
          <tbody>
            
            <tr className="p-4 flex flex-col gap-2 ">
              {todos.map((todo) => (
                <div key={todo._id} className="w-full flex space-between gap-5 ">
                  {editingId === todo._id ? (
                    <div className="w-full flex space-between gap-5">
                      <div className="w-full flex place-content-between p-6 ">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="flex-grow mr-2 p-2 border border-gray-300 rounded"
                      />
                      <div className=" flex gap-6">
                        <button
                          onClick={() => updateTodo(todo._id)}
                        >
                         <IoIosSave />
                        </button>
                        <button
                         
                          onClick={() => {
                            setEditingId(null);
                            setEditTitle("");
                          }}
                        >
                          <MdOutlineCancelPresentation />
                        </button>
                      </div>
                      
                      </div>
                    </div>
                  ) : (
                    <div className="w-full flex place-content-between p-6 ">
                      <div className="">
                        {todo.title}
                      </div>

                      <div className="flex flex-row gap-5">
                      <div >
                        <button
                          onClick={() => {
                            setEditingId(todo._id);
                            setEditTitle(todo.title);
                          }}
                        >
                          <AiFillEdit />
                        </button>
                      </div>
                      <div>
                        <button
                         
                          onClick={() => deleteTodo(todo._id)}
                        >
                         <MdDelete />
                        </button>
                      </div>
                      </div>
                    
                    </div>
                  )}
                </div>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
