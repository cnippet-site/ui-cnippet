import { ClipPaths, ClippedFigure } from "@/components/motion/clippath";

export default function ImageRevealGallery() {
    return (
        <>
            <ClipPaths />
            <section className="grid grid-cols-3 gap-8 rounded-lg border bg-white p-5 dark:bg-black">
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
