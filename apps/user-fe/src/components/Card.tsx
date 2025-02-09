type CardProps = {
    children?: React.ReactNode,
    height?: string,
    width?: string
}

export function Card({ children, height, width }: CardProps) {
    return <div className={`border-2 border-black rounded-lg py-3 px-5 ${height} ${width} overflow-auto`}>
        {children}
    </div>
}

export function CardTitle({ title }: { title: String }) {
    return <div className="text-xl font-medium pb-2 border-b">
        {title}
    </div>
}