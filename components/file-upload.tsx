"use client";

import { CldUploadWidget } from "next-cloudinary";
import { toast } from "sonner";

interface FileUploadProps {
    onChange: (value: {
        url: string;
        name?: string;
        assetId?: string;
        playbackId?: string;
    }) => void;
}

export const FileUpload = ({ onChange }: FileUploadProps) => {
    return (
        <CldUploadWidget
            uploadPreset="lms-test"
            options={{
                resourceType: "auto",
                maxFileSize: 104857600, // 100MB
                sources: ["local", "url", "camera"],
                multiple: false,
            }}
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
            onSuccess={(result: any) => {
                onChange({
                    url: result?.info?.secure_url,
                    name: result?.info?.original_filename,
                    assetId: result?.info?.public_id,
                    playbackId: result?.info?.playback_url,
                });
            }}
            //eslint-disable-next-line @typescript-eslint/no-explicit-any
            onError={(error: any) => {
                toast.error("File upload failed");
                console.error("Upload error:", error);
            }}
        >
            {({ open }) => (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        open();
                    }}
                    className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition"
                >
                    Upload File
                </button>
            )}
        </CldUploadWidget>
    );
};
