'use client';

type AuthButton = {
    className? : string
    text: string,
    onButtonClick?: ()=> void
}
export function Button({ text, onButtonClick, className }: AuthButton) {

    if(!className){
        className = "px-6 py-2 border bg-gray-700 hover:bg-gray-900 text-white text-lg rounded-lg";
    }
    return <>
        <button className={className} onClick={onButtonClick}>{text}</button>
    </>
}
