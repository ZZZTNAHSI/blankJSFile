import NewProj from "./components/NewProj";
import Button from "./components/Button";
import NoProj from "./components/NoProj";
import TodoList from "./components/TodoList";
import ColumnButton from "./components/ColumnButton";
import {useState, useRef } from "react";


function App() {
  const [masterTable, setMasterTable] = useState([]);
  const [onList, setOnList] = useState(false);
  const [onPage, setOnPage]  = useState(false);
  const [whichIndex, setWhichIndex] = useState();
  



  function handleSubmit2(title1, desc1, dueDate1) {
    setMasterTable((prev) => {
      return [...prev, {
        title: title1,
        desc: desc1,
        dueDate: dueDate1,
        tasks: []
      }];
    });
  }

  function handlePage() {
    setOnPage(true);
    setOnList(false);
  }
  function handleOnList() {
    setOnList(true);
    setOnPage(false);
  }
  function handleIndex(index) {
    setWhichIndex(index);
  }
  function handleAddTask(task1) {

    setMasterTable((prev) => { 
      const tasks = masterTable[whichIndex].tasks;
      console.log("setMasterTable in process///");
      const zaTasks = [...tasks, task1];
      console.log(zaTasks);
      let prevTable = prev;
      prevTable[whichIndex].tasks = zaTasks;
      console.log(prevTable);
      return prevTable;
    });
    console.log("This is master table after reender: " + masterTable);
    setOnPage(() => false);
  }

  return (
    <>
      
      <div className="flex flex-row w-screen mt-16">
        <div className="flex flex-col flex-wrap pl-12 bg-black w-[35%] s-12 h-screen rounded-tr-3xl rounded-br-3xl min-w-[300px] max-w-[400px]">
          <p className="text-white text-2xl font-semibold mt-[70px]">YOUR PROJECTS</p>
          <Button title="+ Add Project" newPage={handlePage} />
          <div className="flex flex-col ">
            {masterTable.map((obj, index) => <ColumnButton key={index} title={obj.title} onList={handleOnList} onC={handleIndex} zaNum={index}/>)}
          </div>
        </div>
        
        { (!onList && !onPage) &&  <NoProj newPage={handlePage} />}
        {onPage && <NewProj handleSubmit2={handleSubmit2} /> }
        {onList && <TodoList table={masterTable[whichIndex]} index={whichIndex} addTask={handleAddTask}/> }
      </div>
    </>
  );
}

export default App;
