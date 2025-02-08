'use client';

type AuthButton = {
    text: string,
    onButtonClick: ()=> void
}
export function Button({ text, onButtonClick }: AuthButton) {
    return <>
        <button className="px-6 py-2 border bg-blue-500 hover:bg-blue-700 text-white text-lg rounded-lg" onClick={onButtonClick}>{text}</button>
    </>
}