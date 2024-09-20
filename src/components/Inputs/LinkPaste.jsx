import React from "react";
import { IconLink } from "@tabler/icons-react";

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
