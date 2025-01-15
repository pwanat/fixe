"use client";

import { useRouter } from "next/navigation";
import { useUploadThing } from "~/utils/uploadthing";
import { toast } from "sonner";
import { usePostHog } from "posthog-js/react";
import { ImageUp } from "lucide-react";
import LoadingSpinnerSVG from "./loading-spinner";
type Input = Parameters<typeof useUploadThing>;



const useUploadThingInputProps = (...args: Input) => {
  const $ut = useUploadThing(...args);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const selectedFiles = Array.from(e.target.files);
    const result = await $ut.startUpload(selectedFiles);

    console.log("uploaded files", result);
  };

  return {
    inputProps: {
      onChange,
      multiple: ($ut.routeConfig?.image?.maxFileCount ?? 1) > 1,
      accept: "image/*",
    },
    isUploading: $ut.isUploading,
  };
};

const SimpleUploadButton = () => {
  const router = useRouter();
  const posthog = usePostHog();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onUploadBegin: () => {
      posthog.capture("Upload begin");
      toast(
        <div className="flex items-center gap-2">
          <LoadingSpinnerSVG /> Uploading
        </div>,
        {
          duration: 10_000,
          id: "upload-begin",
        },
      );
    },
    onClientUploadComplete: () => {
      toast.dismiss("upload-begin");
      toast("Upload complete");
      router.refresh();
    },
    onUploadError: (error) => {
      posthog.capture("Upload error", { error });
      toast.dismiss("upload-begin");
      toast.error("Upload failed");
      router.refresh();
    },
  });
  return (
    <div>
      <label htmlFor="upload-button" className="cursor-pointer">
        <ImageUp />
      </label>
      <input
        id="upload-button"
        type="file"
        className="sr-only"
        {...inputProps}
      />
    </div>
  );
};

export default SimpleUploadButton;
