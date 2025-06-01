// import type { MetadataRoute } from "next";
// import { BASE_URL } from "@/config/docs";
// import {
//     allCharts,
//     allComponents,
//     allMotions,
// } from "@/.content-collections/generated";

// export default function sitemap(): MetadataRoute.Sitemap {
//     const home = {
//         url: BASE_URL,
//     };
//     const allRoutes = ["/charts", "/components", "/motions"];

//     const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
//         url: `${BASE_URL}${route}`,
//     }));

//     const motionPages = allMotions.map(({ slugAsParams }) => ({
//         url: `${BASE_URL}/motions/${slugAsParams}`,
//     }));

//     const chartPages = allCharts.map(({ slugAsParams }) => ({
//         url: `${BASE_URL}/charts/${slugAsParams}`,
//     }));

//     const componentPages = allComponents.map(({ slugAsParams }) => ({
//         url: `${BASE_URL}/components/${slugAsParams}`,
//     }));

//     return [home, ...routes, ...motionPages, ...chartPages, ...componentPages];
// }
import { MetadataRoute } from "next";

import {
    allCharts,
    allComponents,
    allMotions,
} from "@/.content-collections/generated";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const BASE_URL = process.env.NEXT_PUBLIC_URL
        ? `${process.env.NEXT_PUBLIC_URL}`
        : "http://localhost:3000";

    const allRoutes = [`/about-us`, `/contact`];

    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.8,
    }));

    const components: MetadataRoute.Sitemap = allComponents.map(
        ({ slugAsParams }) => ({
            url: `${BASE_URL}/components/${slugAsParams}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }),
    );

    const motions: MetadataRoute.Sitemap = allMotions.map(
        ({ slugAsParams }) => ({
            url: `${BASE_URL}/motions/${slugAsParams}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        }),
    );

    const charts: MetadataRoute.Sitemap = allCharts.map(({ slugAsParams }) => ({
        url: `${BASE_URL}/charts/${slugAsParams}`,
        lastModified: new Date(),
        changeFrequency: "daily",
        priority: 0.9,
    }));

    return [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 1,
        },
        ...routes,
        ...components,
        ...motions,
        ...charts,
    ];
}
