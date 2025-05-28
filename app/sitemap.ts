import type { MetadataRoute } from "next";
import { BASE_URL } from "@/config/docs";
import {
    allCharts,
    allComponents,
    allMotions,
} from "@/.content-collections/generated";

export default function sitemap(): MetadataRoute.Sitemap {
    const home = {
        url: BASE_URL,
    };
    const allRoutes = ["/charts", "/components", "/motions"];

    const routes: MetadataRoute.Sitemap = allRoutes.map((route) => ({
        url: `${BASE_URL}${route}`,
    }));

    const motionPages = allMotions.map(({ slugAsParams }) => ({
        url: `${BASE_URL}/motions/${slugAsParams}`,
    }));

    const chartPages = allCharts.map(({ slugAsParams }) => ({
        url: `${BASE_URL}/charts/${slugAsParams}`,
    }));

    const componentPages = allComponents.map(({ slugAsParams }) => ({
        url: `${BASE_URL}/components/${slugAsParams}`,
    }));

    return [home, ...routes, ...motionPages, ...chartPages, ...componentPages];
}
