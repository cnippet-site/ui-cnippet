import {
    ImageComparison,
    ImageComparisonImage,
    ImageComparisonSlider,
} from "@/components/motion/image-comparison";

export default function ImageComparisonBasic() {
    return (
        <ImageComparison className="aspect-16/10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800">
            <ImageComparisonImage
                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h1.jpg"
                alt="Motion Primitives Dark"
                position="left"
            />
            <ImageComparisonImage
                src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h10.jpg"
                alt="Motion Primitives Light"
                position="right"
            />
            <ImageComparisonSlider className="bg-white" />
        </ImageComparison>
    );
}
