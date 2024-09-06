import React from "react";
import { IconPaperClip } from "@tabler/icons-react";

const FileUpload = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <IconPaperClip size={21} />
    <input
      id="file-upload"
      type="file"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
