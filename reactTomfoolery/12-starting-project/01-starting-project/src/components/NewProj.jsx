import { forwardRef, useRef, useImperativeHandle} from "react";

const NewProj = forwardRef(function NewProj({handleSubmit, handleSubmit2}, ref) {
    const title = useRef();
    const desc = useRef();
    const dueDate = useRef();

    useImperativeHandle(ref, () => {return {
        getTitle: () => {return title.current.value},
        getDesc: () => {return desc.current.value},
        getDueDate: () => {return dueDate.current.value}
    }});
    

    
    return <form className="flex flex-col justify-items-center basis-full ml-10 mr-[20%] mt-20 w-[40%]" onSubmit={(e) => {
        handleSubmit();
        handleSubmit2(title, desc,dueDate);
        e.preventDefault();
        title.current.value = "";
        desc.current.value = "";
        dueDate.current.value = "";

        }}>
        <div className="flex flex-row-reverse ">
            <button type="submit" className="rounded-lg text-white bg-black  ml-5 min-w-[90px] min-h-10 ">Save</button>
            <button type="button" className=" min-w-[90px] rounded-lg min-h-10 text-black hover:bg-stone-400">Cancel</button>
        </div>
        <label className="text-stone-500 min-h-[20px] font-bold min-w-full mt-4">Title</label>
        <textarea ref={title} className={"resize-none bg-stone-200 rounded-sm outline-none outline p-1 focus:border-b-black border-b-stone-400 border-2 h-16"}></textarea>
        <label className="text-stone-500 min-h-[20px] font-bold min-w-full mt-4">Description</label>
        <textarea ref={desc} className={"resize-none bg-stone-200 rounded-sm outline-none outline p-1 focus:border-b-black border-b-stone-400 border-2 h-24"}></textarea>
        <label className="text-stone-500 min-h-[20px] font-bold min-w-full mt-4">Due Date</label>
        <textarea ref={dueDate} placeholder="DD.MM.YYYY" className={"resize-none bg-stone-200 rounded-sm outline-none outline p-1 focus:border-b-black border-b-stone-400 border-2 h-16"}></textarea>

    </form>
});

export default NewProj;