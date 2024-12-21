function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="flex flex-row w-screen">
        <div className="flex flex-col flex-wrap pl-12 bg-black w-[35%] s-12 h-screen rounded-tr-3xl rounded-br-3xl min-w-[300px] max-w-[450px]">
          <p className="text-white text-2xl font-semibold mt-[70px]">YOUR PROJECTS</p>
          <button className="bg-stone-800 mb-8 text-stone-400 max-w-40 rounded-[5px] min-h-[40px] text-lg mt-10">+ Add Project</button>
          <div className="flex flex-col ">

          </div>
        </div>
      </div>
    </>
  );
}

export default App;
