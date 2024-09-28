"use client"

import AboutSection from "@/components/aboutSection";
import AstrxsLogo from "@/components/astrxsLogo";
import { Card, CardBody, CardHeader, Link, Tab, Tabs } from "@nextui-org/react";
import Image from "next/image"
import { Typewriter } from "nextjs-simple-typewriter";
type AboutProps = {
    children?: React.ReactNode;
}

export default function About(props : AboutProps) {
    return (
        <>
            <section className="flex items-center justify-around flex-col md:flex-row md:h-[50vh] lg:h-[65vh] lg:max-h-[1000px]">
                <div>
                    <h1>
                        <span className="text-foreground text-[1.7rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-primary-500">Welcome to </span><AstrxsLogo size={"text-[1.7rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"} /><span className="text-[1.5rem] md:text-[2.3rem] lg:text-[3rem] xl:text-[4rem]">,</span>
                    </h1>
                    <h3 className="text-foreground text-xs md:text-sm lg:text-2xl">
                        a platform for 
                        <Typewriter
                            words={[' space geeks', ' existentialist enjoyers :)', ' astronomy enthusiasts']}
                            loop={2}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={70}
                            delaySpeed={1000}
                        />
                    </h3>
                </div>
                <Image src={"/undraw_stars.svg"} className="w-[90%] mt-20 md:mt-0 md:w-[30%] lg:w-[30%]" alt="Spaceman" width={500} height={500} />
            </section>
            <section className="flex items-center justify-around mt-32">
                <div className="flex flex-col max-w-[500px]">
                    <Tabs aria-label="Options" className="flex justify-center items-center">
                        <Tab key="apod" title="APOD">
                        <Card>
                            <CardHeader className="m-0 py-0 pt-3 px-3">
                                <h1 className="text-primary font-bold">
                                    Astronomy Picture of the Day (APOD)
                                </h1>
                            </CardHeader>
                            <CardBody className="px-3 pb-3">
                                <p className="leading-6">
                                    <Link className="" href="https://www.figma.com/exit?url=https%3A%2F%2Fapod.nasa.gov%2Fapod%2Farchivepix.html">Discover the cosmos!</Link> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                                </p>
                            </CardBody>
                        </Card>  
                        </Tab>
                        <Tab key="nivl" title="NIVL">
                        <Card>
                            <CardHeader className="m-0 py-0 pt-3 px-3">
                                <h1 className="text-primary font-bold">
                                    NASA Image and Video Library (NIVL)
                                </h1>
                            </CardHeader>
                            <CardBody>
                                <p>
                                    Explore the universe through a vast collection of images and videos! Featuring an extensive archive of space exploration missions, celestial phenomena, and the wonders of our solar system and beyond.
                                </p>
                            </CardBody>
                        </Card>  
                        </Tab>
                    </Tabs>
                </div>  
            </section>
        </>
    );

}