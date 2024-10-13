"use client";

import { GeneralResponse, getSource } from "@/data/getSourceNivl";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Nivl() {    
    const [data, setData] = useState<GeneralResponse | undefined>();
    useEffect(() => {

        const getData = async () => {
            const res = await getSource({input: "mars"});
            setData(res);
            console.log(res);
        }

        getData();


    }, []);

    return (
        <div className="flex flex-wrap justify-center gap-2">
            <div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://plus.unsplash.com/premium_photo-1727894731207-54d76ab3b7bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjZ8fHxlbnwwfHx8fHw%3D" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1726565305216-86e2b26aeb3a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://plus.unsplash.com/premium_photo-1727540690253-c40ab51328de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNjJ8fHxlbnwwfHx8fHw%3D" className="rounded-none"/>
                </div>
            </div>
            <div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1727961673785-689cad093cc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1719937206098-236a481a2b6d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1728495145469-f0bcbda1dfa5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D" className="rounded-none"/>
                </div>
            </div>
            <div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://plus.unsplash.com/premium_photo-1728112300585-e7308020e63a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D" className="rounded-none"/>
                </div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://images.unsplash.com/photo-1725714354604-cacdb5c9a027?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4NXx8fGVufDB8fHx8fA%3D%3D" className="rounded-none"/>
                </div>
            </div>
            <div>
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://plus.unsplash.com/premium_photo-1728510320088-0b89856e726e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" className="rounded-none"/>
                </div>  
                <div className="max-w-[300px] max-h-[800px] m-3 ml-0">
                    <Image src="https://plus.unsplash.com/premium_photo-1728417200791-9fc668066747?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5NXx8fGVufDB8fHx8fA%3D%3Dsd" className="rounded-none"/>
                </div>  
            </div>
        </div>
    )
}