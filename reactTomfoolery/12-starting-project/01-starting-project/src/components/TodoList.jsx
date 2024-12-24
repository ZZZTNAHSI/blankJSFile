import Task from "./Task"
import { useRef, useState } from "react"


export default function TodoList({id, title, desc, dueDate, tasks, addTask, index, removeTask, rProj, noProj}) {
    const taskInput = useRef();
    console.log(tasks);



    return <div className="flex flex-col mt-20 ml-10 w-[40%] ">
        <div className="flex flex-row justify-between mb-4">
            <p className=" text-3xl font-bold">{title}</p>
            <button onClick={() => {
                rProj(index);
                noProj();
            }} className="w-[80px] h-10 hover:text-red-600">Cancel</button>
        </div>
        <p className="mb-4 text-stone-400">{dueDate}</p>
        <p className="mb-4 leading-loose border-b-2 pb-4 border-stone-300">{desc}</p>
        <p className="mt-1 text-3xl font-bold">Tasks</p>
        <div className="flex flex-row items-center">
            <input ref={taskInput}  className="mt-5 bg-stone-200 rounded-[3px] h-9 p-2 caret-stone-500 min-w-[250px] focus:ring-2 focus:ring-blue-500 focus:outline-none"></input>
            <button onClick={() => {
                const task = taskInput.current.value;    
                addTask(task, index);
                taskInput.current.value="";
                }} className="rounded-lg p-2 ml-2 text-stone-600 h-9 mt-5 w-fit">Add Task</button>
        </div>
        <div className="mt-7 bg-stone-200 p-7 divide-y-[20px]  divide-stone-200 rounded-sm ">
                {tasks.map((task, indexTask) => {
                    return <Task  key={indexTask} text={task} indexProj={index} indexTask={indexTask} rTask={removeTask} />
                })}

        </div>
    </div>
}