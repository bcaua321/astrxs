import { Typewriter } from "nextjs-simple-typewriter";
import AboutSection from "@/components/aboutSection";
import Image from "next/image";
import AstrxsLogo from "@/components/astrxsLogo";

export default function Home() {
  return (
    <>
      <section className="flex items-center justify-around flex-col w-[100%] my-20 md:my-0 md:flex-row md:h-[50vh] lg:h-[65vh] lg:max-h-[1000px]">
          <div>
              <h1>
                  <span className="text-foreground text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-primary-500">
                    Welcome to&nbsp;
                  </span>
                  <AstrxsLogo size={"text-[2rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]"} />
              </h1>
              <h3 className="text-foreground text-center text-base md:text-sm lg:text-2xl">
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
          {/* <Image src={"/undraw_stars.svg"} className="w-[90%] mt-20 md:mt-0 md:w-[44%] lg:w-[30%]" alt="Spaceman" width={500} height={500} /> */}
      </section>
      <AboutSection />
    </>
  );
}
