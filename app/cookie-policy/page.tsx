import Footer from "@/components/shared/footer";
import React from "react";

const page = () => {
    return (
        <>
            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-6xl px-10 pt-32">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>

                        <div className="relative border-t">
                            <div className="grid size-[5rem] w-full grid-cols-12 grid-rows-1 divide-x divide-y first:border-l last:border-r">
                                <div className="col-span-1"></div>
                                <div className="col-span-10"></div>
                                <div className="col-span-1 border-r border-b"></div>
                            </div>

                            <div className="grid size-[5rem] h-full w-full grid-cols-12 first:border-l">
                                <div className="col-span-1 border-b border-l"></div>
                                <div className="col-span-10 border border-t-0 py-8">
                                    <h1 className="text-center text-6xl leading-tight font-semibold tracking-tight">
                                        Cookie Policy
                                    </h1>
                                </div>
                                <div className="col-span-1 border-r border-b"></div>
                            </div>

                            <div className="grid size-[5rem] w-full grid-cols-12 first:border-l">
                                <div className="col-span-1 border-b border-l"></div>
                                <div className="col-span-10 flex items-center justify-center border border-t-0">
                                    <p className="text-center text-sm text-neutral-500">
                                        Last Updated April 21, 2020
                                    </p>
                                </div>
                                <div className="col-span-1 border-r border-b"></div>
                            </div>

                            <div className="grid w-full grid-cols-12 border border-t-0">
                                <div className="col-span-8 px-10 pt-10 pb-16">
                                    <p className="text-neutral-600">
                                        We use cookies and similar technologies.
                                        This Cookie Policy explains how we use
                                        cookies in connection with the Platform
                                        and your related choices. Capitalized
                                        terms used in this Cookie Policy but not
                                        defined here will have the meanings
                                        given to them in our Privacy Policy. You
                                        may also contact us at
                                        privacy@vercel.com with any additional
                                        questions.
                                    </p>
                                    <h2 className="pt-10 text-2xl font-semibold">
                                        What are Cookies, Pixels and Local
                                        Storage?
                                    </h2>
                                    <p className="pt-5 text-neutral-500">
                                        Cookies are small files that websites
                                        place on your computer as you browse the
                                        web. Like many commercial websites, we
                                        use cookies. Cookies — and similar
                                        technologies — do lots of different
                                        jobs, like letting you navigate between
                                        pages efficiently, remembering your
                                        preferences, and generally improving the
                                        user experience. Cookies and other
                                        technologies may also be used to measure
                                        the effectiveness of marketing and
                                        otherwise assist us in making your use
                                        of the Platform and its features more
                                        relevant and useful to you.
                                    </p>
                                    <p className="pt-3 text-neutral-500">
                                        Pixel tags (also known as web beacons or
                                        pixels) are small blocks of code on a
                                        web page or in an email notification.
                                        Pixels allow companies to collect
                                        information such as an individual&apos;s IP
                                        address, when the individual viewed the
                                        pixel and the type of browser used. We
                                        use pixel tags to understand whether
                                        you&apos;ve interacted with content on our
                                        Platform, which helps us measure and
                                        improve our Platform and personalize
                                        your experience.
                                    </p>
                                    <p className="pt-3 text-neutral-500">
                                        Local storage allows a website to store
                                        information locally on your computer or
                                        mobile device. Local storage is mainly
                                        used to store and retrieve data in HTML
                                        pages from the same domain. We use local
                                        storage to customize what we show you
                                        based on your past interactions with our
                                        Platform. It is important to understand
                                        that cookies (and the technologies
                                        listed above) collect personal
                                        information as well as non-identifiable
                                        information.
                                    </p>
                                    <h2 className="pt-5 text-2xl font-semibold">
                                        Your Choices
                                    </h2>
                                    <p className="pt-3 text-neutral-500">
                                        You can learn more about cookies by
                                        visiting
                                        https://www.allaboutcookies.org/, which
                                        includes additional useful information
                                        on cookies and how to block cookies
                                        using different types of browsers.
                                    </p>
                                    <p className="pt-3 text-neutral-500">
                                        If you&apos;d like to remove or disable
                                        cookies via your browser, please refer
                                        to your browser&apos;s configuration
                                        documentation.
                                    </p>
                                    <p className="pt-3 text-neutral-500">
                                        Please note, however, that by blocking
                                        or deleting all cookies used on the
                                        Site, you may not be able to take full
                                        advantage of the Site and you may not be
                                        able to properly log on to the Site. For
                                        analytics, we use Google Analytics. To
                                        opt out from Google Analytics, you can
                                        download a plug-in by visiting
                                        https://tools.google.com/dlpage/gaoptout.
                                    </p>
                                </div>
                                <div className="col-span-4 px-10 border-l pt-10">
                                    <div className="flex font-semibold">
                                        Cookie Policy
                                    </div>
                                    <ul className="pt-5 text-sm space-y-2 text-neutral-600">
                                        <li>What are Cookies, Pixels and Local Storage?</li>
                                        <li>How and Why do We Use Cookies?</li>
                                        <li>Your Choices</li>
                                    </ul>
                                </div>
                            </div>

                            {/* 
                            <div className="grid size-[16.5rem] w-full grid-cols-12 first:border-l dark:border-neutral-800">
                                <div className="col-span-12 grid grid-cols-12 divide-x divide-y dark:divide-neutral-800">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <div className="col-span-8 row-span-3 flex flex-col items-center justify-center border-r border-b bg-white text-center dark:border-neutral-800 dark:bg-black">
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
                                <div className="col-span-2 row-span-3 grid grid-cols-2 grid-rows-3 divide-x divide-y dark:divide-neutral-800">
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default page;
