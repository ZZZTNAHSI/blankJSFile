import NewProjInput from "./NewProjInput"

export default function NewProj() {
    return <form className="flex flex-col justify-items-center basis-full ml-10 mr-[20%] mt-20 w-[40%]">
        <div className="flex flex-row-reverse ">
            <button className="rounded-lg text-white bg-black  ml-5 min-w-[90px] min-h-10 ">Save</button>
            <button className=" min-w-[90px] rounded-lg min-h-10 text-black hover:bg-stone-400">Cancel</button>
        </div>
        <NewProjInput title="Title" placeHolder="" height={4}/>
        <NewProjInput title="Description" placeHolder="" height={22}/>
        <NewProjInput title="Due Date" placeHolder="DD.MM.YYYY" height={6}/>

    </form>
}