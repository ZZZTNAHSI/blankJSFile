import NewProj from "./components/NewProj";
import Button from "./components/Button";
import NoProj from "./components/NoProj";
import TodoList from "./components/TodoList";
import ColumnButton from "./components/ColumnButton";
import {useState, useRef } from "react";


function App() {
  const [masterTable, setMasterTable] = useState([]);
  const [pageIndex, setPageIndex] = useState({
    index: undefined, 
    page: false,
    proj: false,

  });

  function handleNewProj(title, desc, dueDate) {
    setMasterTable((prev) => {
      const id = Math.random();
      console.log(...prev);     
      return [...prev, {
        id: id,
        title: title,
        desc: desc,
        dueDate: dueDate,
        tasks: []
      }];
    });
  }
  function handlePage() {
    setPageIndex((prev) => {
      return {
        ...prev,
        page: true,
        proj: false,
      }
    });
  }
  // function handleOnList() {
  //   setPageIndex((prev) => {
  //     return {...prev,
  //       proj: true,
  //       page: false,
  //     }
  //   });
  // }
  function handleIndex(id) {
    const theIndex = masterTable.findIndex((proj) => proj.id === id);
    // console.log("theIndex: " + theIndex);
    setPageIndex(() => { 
      return {
        index: theIndex,
        proj: true,
        page: false,
      }
    });
  }

  function handleAddTask(task, index) {
    setMasterTable((prev) => {
      console.log("the task: " + task);
      console.log("the index: " + index);
      let prevRows = prev[index].tasks;
      const newRows = [...prevRows, task];
      console.log("new Tasks: " + newRows);
      let prevTable = prev;
      prevTable[index].tasks = newRows;    
      console.log("This is new prevTable: " + prevTable[index]);
      return prevTable;
    })
  }

  return (
    <>
      
      <div className="flex flex-row w-screen mt-16">
        <div className="flex flex-col flex-wrap pl-12 bg-black w-[35%] s-12 h-screen rounded-tr-3xl rounded-br-3xl min-w-[300px] max-w-[400px]">
          <p className="text-white text-2xl font-semibold mt-[70px]">YOUR PROJECTS</p>
          <Button title="+ Add Project" newPage={handlePage} />
          <div className="flex flex-col ">
            {masterTable.map((obj, index) => <ColumnButton key={index} id={obj.id} title={obj.title} onC={handleIndex}/>)}
          </div>
        </div>
        
        { (!pageIndex.page && !pageIndex.proj) &&  <NoProj newPage={handlePage} />}
        {pageIndex.page  && <NewProj handleSubmit2={handleNewProj} /> }
        {pageIndex.proj && <TodoList {...masterTable[pageIndex.index]} index={pageIndex.index} addTask={handleAddTask}/> }
      </div>
    </>
  );
}

export default App;