import { ApodResponse, getImages } from "@/data/getImages";
import { Image, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SkeletonApod from "./skeletonApod";
import { IoIosInformation } from "react-icons/io";
import Link from "next/link";

export default function ApodContent({ currentDate } : { currentDate : string  } ) {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [data, setData] = useState<ApodResponse | undefined>(undefined);

    useEffect(() => {
        setLoaded(false);

        const fetchData = async () => {
            try {
              const result = await getImages({ date: currentDate }); 
              setData(result);
              console.log("Data:", result);
              setLoaded(true);
            } catch (error) {
              console.error('Erro ao buscar dados:', error);
            }
          };
      
          fetchData(); 
    }, [currentDate]);

    // if(!data) return  <SkeletonApod />;

    return (
        <>
            {/* <div className="flex flex-col justify-center items-center mt-5">
                <h2 className="m-2 text-center">
                    <span className="font-bold">{data?.title} </span>
                    <span className="underline">{data?.copyright ? `(${data.copyright}` : ""}</span>
                </h2>
                <Image src={data?.url} className="w-full max-h-[700px]" />
                <div className="max-w-[900px]">
                    <p className="indent-5">
                        {data?.explanation}
                    </p>
                </div>
            </div> */}
            <div className="flex flex-col justify-center items-center mt-5">
                <h2 className="m-2 text-center font-bold">
                    {data?.title}  
                </h2>
                <Image src={data?.url} className="w-full max-h-[700px]" /> 
            </div>
        </>
    )
}   // 

