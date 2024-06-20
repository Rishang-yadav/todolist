"use client";
import {AddTask} from "@/views/AddTask";
import { FcTodoList } from "react-icons/fc";


export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-center p-8 ">
      <div className="text-center p-8">
        <div className="flex flex-row items-center p-2">
          <FcTodoList className="h-10 w-10 text-cyan-500 " />
          <h1 className="text-4xl italic text-cyan-500 font-bold "> To-do list</h1>
        </div>
      <h2 className="text-orange-600 ">Simple App to manage your daily to-dos</h2>
      </div>
      <AddTask /> 
    </main>

    
  );
}
