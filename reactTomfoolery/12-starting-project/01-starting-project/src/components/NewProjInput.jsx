export default function NewProjInput({title, placeHolder, height}) {
    const textStyle = "resize-none bg-stone-200 rounded-sm outline-none outline p-1 focus:border-b-black border-b-stone-400 border-2 h-"+ height ;

    return <>
    <label className="text-stone-500 min-h-[20px] font-bold min-w-full mt-4">{title}</label>
    <textarea className={textStyle} placeholder={placeHolder}></textarea>
    </>
}