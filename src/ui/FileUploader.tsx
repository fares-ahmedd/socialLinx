import { Button } from "@/components/ui/button";
import { useCallback, useState } from "react";
import { FileWithPath, useDropzone } from "react-dropzone";
import { FcAddImage, FcMultipleDevices } from "react-icons/fc";
import { TbReplace } from "react-icons/tb";

type FileUploaderProps = {
  fieldChange: (FILES: File[]) => void;
  mediaUrl: string;
};

function FileUploader({ fieldChange, mediaUrl }: FileUploaderProps) {
  const [fileUrl, setFileUrl] = useState(mediaUrl);
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      fieldChange(acceptedFiles);
      setFileUrl(URL.createObjectURL(acceptedFiles[0]));
    },
    [fieldChange]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [".png", ".jpeg", ".jpg", ".svg"] },
  });
  return (
    <div
      {...getRootProps()}
      className="flex flex-col cursor-pointer flex-center bg-dark-3 rounded-xl "
    >
      <input {...getInputProps()} className="cursor-pointer " />
      {fileUrl ? (
        <>
          <div className="flex justify-center flex-1 w-full p-5 lg:p-10">
            <img src={fileUrl} alt="postImg" className="file_uploader-img" />
          </div>
          <span className=" file_uploader-label flex-center">
            <TbReplace className="text-3xl text-primary-500" /> Click or drag
            photo to replace
          </span>
        </>
      ) : (
        <div className="file_uploader-box">
          <FcAddImage className="text-[100px]" />
          <h3 className="mt-4 base-medium text-light-2">Drag Photo here</h3>
          <span className="my-4 text-off-white small-regular">
            SVG, PNG, JPG
          </span>
          <Button className="shad-button_dark_4">
            <span className="text-3xl">
              <FcMultipleDevices />
            </span>{" "}
            Select From Device
          </Button>
        </div>
      )}
    </div>
  );
}

export default FileUploader;
