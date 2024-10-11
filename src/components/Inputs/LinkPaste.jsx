import React from "react";
import { IconLink } from "@tabler/icons-react";

/**
 * Renders a link paste input component with an icon
 * @param {Object} props - The component props
 * @param {Function} props.handleLinkPaste - Function to handle link paste event
 * @returns {JSX.Element} A label containing an icon and hidden input for link pasting
 */
const LinkPaste = ({ handleLinkPaste }) => (
  <label htmlFor="link-input" className="cursor-pointer">
    <IconLink size={21} className="text-gray-400" />
    <input
      id="link-input"
      type="text"
      onChange={handleLinkPaste}
      className="hidden"
    />
  </label>
);

export default LinkPaste;
