import { cn } from "../lib/utils";

const MaxWidthWrap = ({
    className,
    children,
}:{
    className?: string,
    children: React.ReactNode
}) => {
    return(
    <div className={cn('mx-auto w-ful max-w-screen-xl px-2.5 md:px-20',className)}>
        {children}
    </div>
    )
}

export default MaxWidthWrap;