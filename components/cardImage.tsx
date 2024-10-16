import { Image } from "@nextui-org/react";

export function CardImage({url} : { url: string}) {
    return (
        <div className="break-inside">
            <Image src={url} className="rounded-lg my-3"/>
        </div>
    )
}