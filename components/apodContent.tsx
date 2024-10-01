import { ApodResponse, getImages } from "@/data/getImages";
import { Image, Button, Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, ModalFooter, ModalProps } from "@nextui-org/react";
import { useEffect, useState } from "react";
import SkeletonApod from "./skeletonApod";
import { FaChevronDown } from "react-icons/fa6";

export default function ApodContent({ currentDate } : { currentDate : string  } ) {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [data, setData] = useState<ApodResponse | undefined>(undefined);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    useEffect(() => {
        setLoaded(false);

        const fetchData = async () => {
            try {
              const result = await getImages({ date: currentDate }); 
              setData(result);
              console.log("Data:", result);
              
              setTimeout(() => { setLoaded(true) }, 500);
            } catch (error) {
              console.error('Erro ao buscar dados:', error);
            }
          };
      
          fetchData(); 
    }, [currentDate]);

    if(!data) return  <SkeletonApod />;

    return (
        <>
            <div className="flex flex-col justify-center items-center mt-5 h-full max-h-max">
                <div className="flex justify-center items-center mb-4 cursor-pointer" onClick={onOpen}>
                    <h2 className="m-2 text-center font-bold text-[0.8rem] md:text-lg">
                        {data.title}  
                    </h2>
                    <span className="text-[0.7rem]"><FaChevronDown /> </span>
                </div>
                <Image src={data.url} className="w-full h-full max-h-[700px]" /> 
            </div>
            <Modal scrollBehavior="inside" backdrop="blur" size="lg" className="p-2 py-3" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">
                            <h1>{data.title}</h1>
                            {data.copyright && <h2 className="font-bold text-sm">Author: {data.copyright}</h2>}
                        </ModalHeader>
                        <ModalBody>
                            {data.explanation}
                        </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    )
}   // 

