import { ClipPaths, ClippedFigure } from "@/components/motion/clip-path";

export default function ImageRevealGallery() {
    return (
        <>
            <ClipPaths />
            <section className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-5 dark:bg-black">
                <ClippedFigure
                    variant="squiggle"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h4.jpg"
                    alt="Squiggle shaped image"
                />

                <ClippedFigure
                    variant="rectangle"
                    src="https://videos.pexels.com/video-files/7710243/7710243-uhd_2560_1440_30fps.mp4"
                    alt="Rectangle shaped video"
                    type="video"
                />

                <ClippedFigure
                    variant="abstract"
                    src="https://res.cloudinary.com/dphulm0s9/image/upload/v1737986669/h5.jpg"
                    alt="Abstract shaped image"
                    className="custom-class"
                    hoverScale={false}
                />
                <ClippedFigure
                    variant="variant1"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                    alt="Variant 1 image"
                    aspectRatio="4/5"
                />
                <ClippedFigure
                    variant="variant2"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                    alt="Variant 1 image"
                    aspectRatio="4/5"
                />
                <ClippedFigure
                    variant="variant3"
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop"
                    alt="Variant 1 image"
                    aspectRatio="4/5"
                />
            </section>
        </>
    );
}
