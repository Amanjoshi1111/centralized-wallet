type CardProps = {
    children?: React.ReactNode,
    height?: string,
    width?: string
}

type CardTitleProps = {
    title: String,
    refreshBtn?: boolean,
    onButtonClick?: ()=> void
}

export function Card({ children, height, width }: CardProps) {
    return <div className={`border-2 border-black rounded-lg py-3 px-5 ${height} ${width} overflow-auto`}>
        {children}
    </div>
}

export function CardTitle({ title, refreshBtn, onButtonClick }: CardTitleProps) {

    return <div className="flex justify-between items-center pb-2 border-b">
        <div className="text-xl font-medium ">
            {title}
        </div>
        {refreshBtn && <div onClick={onButtonClick}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5 cursor-pointer">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>}
    </div>
}