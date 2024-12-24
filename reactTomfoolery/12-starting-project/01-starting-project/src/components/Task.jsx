export default function Task({text, rTask, indexProj, indexTask}) {
    return <div className="flex flex-row justify-between">
            <p className=" antialiased ">{text}</p>
            <button onClick={() => {
                rTask(indexProj, indexTask);
            }} className="min-h-6 min-w-16 ml-[30px] hover:text-red-500">Clear</button>
    </div>
}                                   