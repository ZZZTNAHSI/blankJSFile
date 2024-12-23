export default function Task({text}) {
    return <div className="flex flex-row justify-between">
            <p className=" antialiased ">{text}</p>
            <button className="min-h-6 min-w-16 ml-[30px] hover:text-red-500">Clear</button>
    </div>
}                                   