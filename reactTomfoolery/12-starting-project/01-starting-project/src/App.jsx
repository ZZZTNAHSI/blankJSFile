import NewProj from "./components/NewProj";
import Button from "./components/Button";
import NoProj from "./components/NoProj";
import TodoList from "./components/TodoList";
import {useState, useRef } from "react";


function App() {
  const [masterTable, setMasterTable] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const info = useRef();

  function handleSubmit() {
    setSubmitted(true);
  }

  function handleSubmit2(title, desc, dueDate) {
    setMasterTable((prev) => {
      return [...prev, {
        title: title.current.value,
        desc: desc.current.value,
        dueDate: dueDate.current.value,
        tasks: []
      }];
    });
    console.log("This is master: " + masterTable);
    setSubmitted((prev) => !prev);
  }

  return (
    <>
      
      <div className="flex flex-row w-screen mt-16">
        <div className="flex flex-col flex-wrap pl-12 bg-black w-[35%] s-12 h-screen rounded-tr-3xl rounded-br-3xl min-w-[300px] max-w-[450px]">
          <p className="text-white text-2xl font-semibold mt-[70px]">YOUR PROJECTS</p>
          <Button title="+ Add Project" />
          <div className="flex flex-col ">
              <button className="text-stone-400 bg-black rounded-[5px] min-h-[30px] p-2 text-md max-w-[100%] mr-12 text-left mb-1 hover:bg-stone-800">TEMP NAME</button>
          </div>
        </div>
        {/* <TodoList /> */}
        {/* <NoProj /> */}
        <NewProj handleSubmit={handleSubmit} handleSubmit2={handleSubmit2} ref={info}/>
      </div>
    </>
  );
}

export default App;
