export default function ColumnButton({title,  id, onC}) {


    return <button onClick={() => {onC(id)}} className="text-stone-400 bg-black rounded-[5px] min-h-[30px] p-2 text-md max-w-[100%] mr-12 text-left mb-1 hover:bg-stone-800">{title}</button>
}