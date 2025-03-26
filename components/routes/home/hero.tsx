import React from "react";
import { InfiniteSlider } from "@/components/motion/infinite-slider";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const images = [
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h1.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h3.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h7.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h8.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h9.jpg",
    "https://res.cloudinary.com/dphulm0s9/image/upload/v1737986668/h10.jpg",
];

const Hero = () => {
    return (
        <>
            <section className="relative w-full">
                <div className="mx-auto w-full max-w-6xl px-10 pt-32">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>
                        <div className="relative grid h-44 w-full grid-cols-12 grid-rows-2 divide-x divide-y border-t first:border-l">
                            {Array.from({ length: 25 }).map((_, i) => (
                                <div key={i} className="col-span-1"></div>
                            ))}
                        </div>
                        {/* <div className="absolute inset-0 grid h-44 grid-cols-12 px-10">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${i === 0 || i === 6 ? "col-span-1" : "col-span-2"}`}
                                >
                                    {i === 0 && (
                                        <div
                                            className={`h-1/2 border-b-0 w-full rounded-tr-full border border-gray-200`}
                                        />
                                    )}
                                    {i > 0 && i < 6 && (
                                        <>
                                            {i % 2 === 0 ? (
                                                <div
                                                    className={`h-full w-full rounded-t-full border border-gray-200`}
                                                />
                                            ) : (
                                                <div
                                                    className={`h-full w-full rounded-b-full border border-gray-200`}
                                                />
                                            )}
                                        </>
                                    )}
                                    {i === 6 && (
                                        <div
                                            className={`h-1/2 w-full border-b-0 rounded-tl-full border border-gray-200`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div> */}
                        <div className="absolute inset-0 grid h-44 w-full grid-cols-12">
                            {Array.from({ length: 7 }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`${i === 0 || i === 6 ? "col-span-1" : "col-span-2"}`}
                                >
                                    {i === 0 && (
                                        <div
                                            className={`h-full w-full rounded-r-full border border-gray-200`}
                                        />
                                    )}
                                    {i > 0 && i < 6 && (
                                        <div
                                            className={`h-full w-full rounded-full border border-gray-200 ${i === 3 && "bg-white"}`}
                                        />
                                    )}
                                    {i === 6 && (
                                        <div
                                            className={`h-full w-full rounded-l-full border border-gray-200`}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="relative">
                            <div className="grid size-[16.5rem] w-full grid-cols-12 grid-rows-3 first:border-l">
                                {/* {Array.from({ length: 37 }).map((_, i) => (
                                    <div key={i} className="col-span-1"></div>
                                ))} */}
                                {/* <div className="col-span-8 bg-white"></div> */}
                                {/* <div className=" absolute col-span-4 bg-white row-span-3 w-full inset-0">

                                </div> */}
                                <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 divide-x divide-y">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="col-span-8 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white text-center">
                                    <h1 className="text-5xl leading-tight font-semibold tracking-tight">
                                        The native Next.js platform.
                                    </h1>
                                    <p className="text-xl leading-relaxed">
                                        <span className="font-medium">
                                            Made by the creators of Next.js,
                                        </span>{" "}
                                        <span className="text-gray-500">
                                            Vercel is designed
                                        </span>
                                        <br />
                                        <span className="text-gray-500">
                                            to build, scale, and secure your
                                            Next.js apps.
                                        </span>
                                    </p>
                                </div>
                                <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 divide-x divide-y">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-10">
                <div className="grid h-full w-full grid-cols-12 border border-t-0 py-16">
                    <div className="col-span-12 bg-white text-center">
                        <h2 className="mb-5 text-5xl leading-tight font-semibold tracking-tight">
                            The native Next.js platform.
                        </h2>
                        <div>
                            <InfiniteSlider gap={24}>
                                {images.map((image, i) => (
                                    <Image
                                        key={i}
                                        src={image}
                                        alt="Apple Music logo"
                                        width={1920}
                                        height={1080}
                                        className="aspect-square w-36 object-cover"
                                    />
                                ))}
                            </InfiniteSlider>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mx-auto mb-20 max-w-6xl px-10">
                <div className="relative w-full">
                    <div className="absolute -bottom-2.5 -right-2.5 z-50 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                        <div className=" " />
                        <div className="border-r-0" />
                        <div className="border-b-0" />
                        <div className=" " />
                    </div>
                    <div className="grid h-full w-full grid-cols-12 border border-t-0 py-16">
                        <div className="col-span-7 bg-white px-10 text-left">
                            <h2 className="text-xl leading-tight font-semibold tracking-tight">
                                Ready to deploy? Start building with a free
                                account. Speak to an expert for your Pro or
                                Enterprise needs.
                            </h2>
                            <div className="mt-5 flex gap-4">
                                <Button className="rounded-full">
                                    Start Building
                                </Button>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Hire an Expert
                                </Button>
                            </div>
                        </div>
                        <div className="col-span-5 bg-white px-10">
                            <div className="flex flex-col items-start justify-start gap-5">
                                <p className="text-gray-500">
                                    Explore Vercel Enterprise with an
                                    interactive product tour, trial, or a
                                    personalized demo.
                                </p>
                                <Button
                                    variant="outline"
                                    className="rounded-full"
                                >
                                    Explore Enterprise
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
