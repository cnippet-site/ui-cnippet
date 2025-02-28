import { AnimatedGroup } from "@/components/motion/animated-group";
import Image from "next/image";

export default function AnimatedGroupPreset() {
    return (
        <AnimatedGroup
            className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3"
            preset="scale"
        >
            <Image
                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h4.jpg"
                alt="impressionist painting, uploaded to Cosmos"
                width={1080}
                height={680}
                className="h-80 w-full rounded-xl object-cover"
            />
            <Image
                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h5.jpg"
                alt="impressionist painting, uploaded to Cosmos"
                width={1080}
                height={680}
                className="h-80 w-full rounded-xl object-cover"
            />
            <Image
                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h2.jpg"
                alt="impressionist painting, uploaded to Cosmos"
                width={1080}
                height={680}
                className="h-80 w-full rounded-xl object-cover"
            />
        </AnimatedGroup>
    );
}
