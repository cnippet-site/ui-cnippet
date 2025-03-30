import Footer from "@/components/routes/shared/footer";
import React from "react";
import {
    Download,
    GitBranch,
    Cloud,
    LineChart,
    Shield,
    Globe,
    Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const page = () => {
    return (
        <>
            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-7xl px-16 pt-32">
                    <div className="relative">
                        <div className="absolute -top-2.5 -left-2.5 z-50 mx-auto grid size-5.5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
                            <div className=" " />
                            <div className="border-r-0" />
                            <div className="border-b-0" />
                            <div className=" " />
                        </div>

                        <div className="relative border-t dark:border-neutral-800">
                            <div className="grid size-[5rem] w-full grid-cols-6 grid-rows-1 divide-x divide-y first:border-l last:border-r md:grid-cols-12 dark:divide-neutral-800 dark:border-neutral-800">
                                <div className="col-span-1"></div>
                                <div className="col-span-2 bg-teal-700"></div>
                                <div className="col-span-1 hidden md:block"></div>
                                <div className="col-span-1 hidden md:block"></div>
                                <div className="col-span-1 hidden md:block"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1 hidden md:block"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1 hidden md:block"></div>
                                <div className="col-span-1 hidden bg-gray-500 md:block"></div>
                                <div className="col-span-1 border-r border-b dark:border-neutral-800"></div>
                            </div>

                            <div className="grid h-full w-full grid-cols-12 grid-rows-2 first:border-l">
                                <div className="col-span-1 row-span-2 hidden grid-rows-2 divide-y border-b border-l md:grid dark:divide-neutral-800 dark:border-neutral-800">
                                    <div className="row-span-1"></div>
                                    <div className="row-span-1"></div>
                                </div>
                                <div className="col-span-12 row-span-2 border border-t-0 px-5 py-10 text-center md:col-span-10 md:px-16 md:py-20 dark:border-neutral-800">
                                    <h1 className="text-3xl leading-tight font-semibold md:text-5xl">
                                        EMPOWER DIGITAL CITIZENS OF THE FUTURE
                                    </h1>
                                    <p className="pt-5 text-neutral-500">
                                        Digital Literacy Hub creates the next
                                        generation of STEM programs that empower
                                        students on their learning journey
                                        through 21st century education and help
                                        them thrive.
                                    </p>
                                </div>
                                <div className="col-span-1 row-span-2 mt-auto hidden size-full grid-rows-2 divide-y border-r border-b-0 md:grid dark:divide-neutral-800 dark:border-neutral-800">
                                    <div className="row-span-1"></div>
                                    <div className="row-span-1 bg-amber-600"></div>
                                </div>
                            </div>

                            <div className="grid size-[5rem] w-full grid-cols-12 grid-rows-1 divide-x divide-y dark:divide-neutral-800">
                                <div className="col-span-1 border-l bg-orange-700"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1"></div>
                                <div className="col-span-1 border-r-0 bg-teal-700"></div>
                                <div className="col-span-1 border-r border-b bg-amber-400 dark:border-neutral-800"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-7xl px-16">
                    <div className="relative dark:border-neutral-800">
                        <div className="border border-t-0 px-10 py-10 text-center dark:border-neutral-800">
                            <h1 className="text-3xl leading-tight font-semibold md:text-5xl">
                                Explore our learning solutions
                            </h1>
                            <p className="mx-auto max-w-xl pt-5 text-neutral-500">
                                Our comprehensive digital literacy programs are
                                designed for all ages and skill levels, helping
                                students and educators develop essential skills
                                for the digital world.
                            </p>
                        </div>
                        <div className="grid w-full grid-cols-12 divide-x border border-t-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="col-span-4 px-10 py-16">
                                <h2 className="mb-3 text-2xl font-bold">
                                    Hobby
                                </h2>
                                <p className="text-muted-foreground mb-2">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>
                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Import your repo, deploy in seconds
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Automatic CI/CD</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Fluid compute</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <LineChart className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Traffic & performance insights
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>DDoS Mitigation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Web Application Firewall</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Community Support</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between"
                                    >
                                        Start Deploying
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-4 px-10 py-16">
                                <h2 className="mb-3 text-2xl font-bold">
                                    Hobby
                                </h2>
                                <p className="text-muted-foreground mb-2">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>
                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Import your repo, deploy in seconds
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Automatic CI/CD</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Fluid compute</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <LineChart className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Traffic & performance insights
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>DDoS Mitigation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Web Application Firewall</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Community Support</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between"
                                    >
                                        Start Deploying
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
                            </div>
                            <div className="col-span-4 px-10 py-16">
                                <h2 className="mb-3 text-2xl font-bold">
                                    Hobby
                                </h2>
                                <p className="text-muted-foreground mb-2">
                                    The perfect starting place for your web app
                                    or personal project.{" "}
                                    <span className="text-foreground font-semibold">
                                        Free forever
                                    </span>
                                    .
                                </p>
                                <div className="mt-8 flex-grow space-y-4 text-sm">
                                    <div className="flex items-start gap-3">
                                        <Download className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Import your repo, deploy in seconds
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <GitBranch className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Automatic CI/CD</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Cloud className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Fluid compute</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <LineChart className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>
                                            Traffic & performance insights
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Shield className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>DDoS Mitigation</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Globe className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Web Application Firewall</span>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Users className="text-muted-foreground mt-0.5 h-5 w-5" />
                                        <span>Community Support</span>
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <Button
                                        variant="outline"
                                        className="group w-full justify-between"
                                    >
                                        Start Deploying
                                        <span className="transition-transform group-hover:translate-x-0.5">
                                            →
                                        </span>
                                    </Button>
                                </div>
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
            </section>

            <section className="relative w-full dark:bg-black">
                <div className="mx-auto w-full max-w-7xl px-16">
                    <div className="relative dark:border-neutral-800">
                        <div className="border border-t-0 px-10 py-10 text-center dark:border-neutral-800">
                            <h1 className="text-3xl leading-tight font-semibold md:text-5xl">
                                Explore our learning solutions
                            </h1>
                            <p className="mx-auto max-w-xl pt-5 text-neutral-500">
                                Our comprehensive digital literacy programs are
                                designed for all ages and skill levels, helping
                                students and educators develop essential skills
                                for the digital world.
                            </p>
                        </div>
                        <div className="relative w-full border-t-0 dark:divide-neutral-800 dark:border-neutral-800">
                            <div className="relative grid grid-cols-12">
                                <div className="col-span-6">
                                    <Image
                                        src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741865881/i5.avif"
                                        alt="Student coding"
                                        width={1920}
                                        height={1080}
                                        className="size-full object-cover"
                                    />
                                </div>
                                <div className="col-span-6 flex flex-col items-center justify-center px-10">
                                    <h2 className="mb-4 text-3xl font-semibold">
                                        From basic computer skills to advanced
                                        coding
                                    </h2>
                                    <p className="mb-4 text-neutral-600">
                                        Designed for students at all levels of
                                        digital literacy, our curriculum takes
                                        learners from the basics of using
                                        digital devices to creating their own
                                        applications and websites.
                                    </p>
                                    <p className="mb-4 text-neutral-600">
                                        Our step-by-step approach ensures that
                                        students build confidence with
                                        technology while developing critical
                                        thinking and problem-solving skills.
                                    </p>
                                    <Button className="mr-auto rounded-full bg-teal-700 px-5">
                                        Learn More
                                    </Button>
                                </div>
                            </div>
                            <div className="relative grid grid-cols-12">
                                <div className="col-span-6 flex flex-col items-center justify-center px-10">
                                    <h2 className="mb-4 text-3xl font-semibold">
                                        From basic computer skills to advanced
                                        coding
                                    </h2>
                                    <p className="mb-4 text-neutral-600">
                                        Designed for students at all levels of
                                        digital literacy, our curriculum takes
                                        learners from the basics of using
                                        digital devices to creating their own
                                        applications and websites.
                                    </p>
                                    <p className="mb-4 text-neutral-600">
                                        Our step-by-step approach ensures that
                                        students build confidence with
                                        technology while developing critical
                                        thinking and problem-solving skills.
                                    </p>
                                    <Button className="mr-auto rounded-full bg-teal-700 px-5">
                                        Learn More
                                    </Button>
                                </div>
                                <div className="col-span-6 h-[25rem]">
                                    <Image
                                        src="https://res.cloudinary.com/dphulm0s9/image/upload/v1741865881/i3.avif"
                                        alt="Student coding"
                                        width={1920}
                                        height={1080}
                                        className="size-full object-cover"
                                    />
                                </div>
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
            </section>

            <Footer />
        </>
    );
};

export default page;
