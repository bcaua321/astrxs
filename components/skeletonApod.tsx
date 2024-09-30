import { Skeleton } from "@nextui-org/react"


export default function SkeletonApod() {
    return (
        <>
            <Skeleton isLoaded={false} className="rounded-sm w-32 h-3 lg: xl:w-[250px] xl:h-[15px] mt-10" / >
            <Skeleton isLoaded={false} className="rounded-lg w-64 h-96 md:w-[70%] lg:w-[50%] xl:w-[720px] xl:h-[500px]" />
            {/* <Skeleton isLoaded={false} className="rounded-lg w-64 h-52 md:w-[70%] lg:w-[50%] xl:w-[720px] xl:h-[240px]" /> */}
        </>
    )
}