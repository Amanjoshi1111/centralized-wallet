'use client';
import { redirect, usePathname } from "next/navigation";

export function Sidebar() {

    const pathname = usePathname();

    const options = [
        [
            "Home",
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
            "/home"
        ],
        [
            "Transfer",
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
            </svg>,
            "/transfer"
        ],
        [
            "Transaction",
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>,
            "/transaction"
        ]];


    return <div className="flex flex-col items-center md:items-start w-20 md:w-1/5 h-screen md:pl-10 pt-20 border-r-2 text-xl font-bold space-y-2 text-gray-500 ">
        {options.map((value, idx) => {
            return <div key={idx} onClick={() => redirect(String(value[2]))}
                className={`flex space-x-4 md:w-full hover:cursor-pointer
                    ${pathname.includes(String(value[2])) && 'text-violet-500'}
                `}>
                <div>{value[1]}</div>
                <div className="truncate overflow-hidden hidden md:block min-w-0">{value[0]}</div>
            </div>
        })}
    </div>
}