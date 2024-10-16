"use client";

import { CardImage } from "@/components/cardImage";
import { getSource, NivlResponse } from "@/data/getSourceNivl";
import { Checkbox, CheckboxGroup, CircularProgress, cn, Image, Input, Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Nivl() {    
    const [data, setData] = useState<NivlResponse[] | undefined>();

    useEffect(() => {
        const getData = async () => {
            const res = await getSource({input: "mars"});
            setData(res?.collection?.items?.slice(0, 80));
        }
        
        getData();

    }, []);

    if (!data) return <div className="flex justify-center items-center h-[100%] w-full">
            <CircularProgress color="secondary" aria-label="Loading..."/>
        </div>

    return (
        <div className="flex justify-center items-center flex-col mx-2"> 
            <div className="w-[90%] md:w-[70%] lg:w-[40%] my-5 p-2">
                <Input variant="bordered" type="search" label="Search for..." />
                <div className="my-3">
                    <CheckboxGroup
                        orientation="horizontal"
                        color="secondary"
                        defaultValue={["image"]}
                    >
                        <Checkbox value="image">Image</Checkbox>
                        <Checkbox value="video">Video</Checkbox>
                    </CheckboxGroup>
  
                </div>
            </div>
            <div className="masonry sm:masonry-sm md:masonry-md">
                {
                    data.map((item, index) => {
                        if(item.links) {
                            return <CardImage key={`${index}-${item.links[0].href}`} url={item.links[0].href!}  />
                        }
                    })
                }        
            </div>
        </div>
    )
}