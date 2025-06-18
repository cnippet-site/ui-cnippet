// import Link from "next/link";
// import React from "react";

// const Cta = () => {
//     return (
//         <section className="dark:bg-black">
//             <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
//                 <div className="relative w-full">
//                     <div className="absolute -right-2.5 -bottom-2.5 z-40 mx-auto grid size-5 grid-cols-2 grid-rows-2 divide-x divide-y divide-neutral-500">
//                         <div className=" " />
//                         <div className="border-r-0" />
//                         <div className="border-b-0" />
//                         <div className=" " />
//                     </div>
//                     <div className="grid h-full w-full divide-x border border-t-0 md:grid-cols-12 dark:border-neutral-900">
//                         <div className="col-span-8 bg-white px-4 py-10 text-left md:px-10 dark:bg-black">
//                             <h2 className="text-xl leading-tight font-semibold tracking-tight">
//                                 Ready to Transform Your Development Workflow?
//                                 Get started with our production-grade components
//                                 today. Need custom solutions? Our team is ready
//                                 to help.
//                             </h2>
//                         </div>
//                         <div className="col-span-4 flex flex-col items-start justify-start gap-5 bg-white px-5 py-10 dark:bg-black">
//                             <div className="flex flex-col items-start justify-start gap-5">
//                                 <p className="text-gray-500">
//                                     Looking for complete production solutions?
//                                     Explore our Blocks ecosystem for ready-made
//                                     page layouts, advanced integrations, and
//                                     custom component development services.
//                                 </p>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="grid h-[3.5rem] w-full grid-cols-12 border-r border-b border-l dark:border-neutral-900">
//                         <div className="col-span-2 border-r dark:border-neutral-900">
//                             <Link
//                                 href="/"
//                                 className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
//                             >
//                                 <div className="absolute inset-0 w-full -translate-x-[110%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
//                                 <h3 className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
//                                     Start Free Trial
//                                 </h3>
//                             </Link>
//                         </div>
//                         <div className="col-span-3 border-r dark:border-neutral-900">
//                             <Link
//                                 href="/"
//                                 className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
//                             >
//                                 <div className="absolute inset-0 w-full -translate-x-[110%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
//                                 <h3 className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
//                                     View Production Solutions
//                                 </h3>
//                             </Link>
//                         </div>
//                         <div className="col-span-1 border-r dark:border-neutral-900" />
//                         <div className="col-span-1 border-r dark:border-neutral-900" />
//                         <div className="col-span-1 border-r dark:border-neutral-900" />
//                         <div className="col-span-3 border-r dark:border-neutral-900">
//                             <Link
//                                 href="/"
//                                 className="group relative flex h-full w-full items-center justify-center overflow-hidden bg-white dark:bg-black"
//                             >
//                                 <div className="absolute inset-0 w-full -translate-x-[110%] bg-black transition-transform duration-300 group-hover:translate-x-[0%] dark:bg-white" />
//                                 <h3 className="relative z-10 text-lg text-slate-950 duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
//                                     Schedule Platform Demo
//                                 </h3>
//                             </Link>
//                         </div>

//                         <div className="col-span-1" />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Cta;

import React from "react";
import { RiArrowRightLine } from "@remixicon/react";

const Cta = () => {
    return (
        <>
            <section className="mx-auto w-full max-w-[1536px] border-t-0 border-b bg-blue-700 pl-8 dark:bg-blue-800 dark:border-neutral-800 text-white md:pl-10 xl:pl-20 2xl:pl-30">
                <div className="grid grid-cols-6 divide-x dark:divide-neutral-800">
                    <div className="col-span-5 py-28">
                        <h2 className="text-2xl leading-tight font-medium tracking-tight md:text-5xl">
                            Ready to Build Your Next Project?
                        </h2>
                        <p className="mt-4 text-gray-100">
                            Explore our complete ecosystem: UI components for
                            custom interfaces, website templates for quick
                            deployment, and comprehensive guides for advanced
                            implementation. Everything you need to succeed in
                            web development.
                        </p>
                    </div>
                    <div className="col-span-1 flex items-center justify-center bg-white dark:bg-black">
                        <RiArrowRightLine className="text-blue-800" size={60} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cta;
