import React from "react";
import { IconPaperclip } from "@tabler/icons-react";

/**
 * Renders a file upload component with a paperclip icon.
 * @param {Object} props - The component props.
 * @param {Function} props.handleFileUpload - The function to handle file upload events.
 * @returns {JSX.Element} A label containing a hidden file input and a paperclip icon.
 */
const FileUpload = ({ handleFileUpload }) => (
  <label htmlFor="file-upload" className="cursor-pointer">
    <IconPaperclip size={21} className="text-gray-400" />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      className="hidden"
    />
  </label>
);

export default FileUpload;
