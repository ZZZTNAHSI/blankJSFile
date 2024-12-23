import img from "../assets/no-projects.png";
import Button from "./Button";


export default function NoProj({newPage}) {
    return <>
        <div className="flex flex-col justify-center mt-[-15%] w-[60%] items-center">
            <img src={img} className=" size-32 mb-6 "/>
            <h2 className="font-bold text-3xl mb-6 ">No Project Selected</h2>
            <p className="text-stone-400 mb-[-16px] ">Select a project or get started with a new one</p>
            <Button title="New Project" newPage={newPage}/>

        </div>
    </>
}