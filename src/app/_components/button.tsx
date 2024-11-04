// We want this file here because we want to make this render differently from
// the rest of the page
"use client";

import { UploadButton } from "~/utils/uploadthing";

export default function UploadThingButton() {
  return (
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
  );
}
