import { Card, CardBody, CardHeader, Link } from "@nextui-org/react";

export default function AboutSection() {
    return (
      <section className="flex items-center justify-around">
          <div className="flex gap-y-10 flex-col md:gap-x-14 md:flex-row md:gap-y-0">
                  <div className="max-w-[450px]">
                      <Card className="bg-slate-400/20">
                          <CardHeader className="m-0 py-0 pt-3 px-3">
                                      <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-700">
                                          Astronomy Picture of the Day (APOD)
                                      </h1>
                          </CardHeader>
                          <CardBody className="px-3 pb-3">
                              <p className="tracking-wide md:tracking-wider">
                                  <Link className="" href="https://apod.nasa.gov/apod/astropix.html">Discover the cosmos!</Link> Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.
                              </p>
                          </CardBody>
                      </Card>  
                  </div>
                  <div className="max-w-[450px]">
                      <Card className="bg-slate-400/20">
                          <CardHeader className="m-0 py-0 pt-3 px-3">
                              <h1 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-fuchsia-500 to-violet-700">
                                  NASA Image and Video Library (NIVL)
                              </h1>
                          </CardHeader>
                          <CardBody>
                              <p className="tracking-wide md:tracking-wider">
                                  Explore the universe through a vast collection of images and videos! Featuring an extensive archive of space exploration missions, celestial phenomena, and the wonders of our solar system and beyond.
                              </p>
                          </CardBody>
                      </Card>  
                  </div>
          </div>  
      </section>
    )
}