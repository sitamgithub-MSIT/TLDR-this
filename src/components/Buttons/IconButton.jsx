import React from "react";

/**
 * Renders an icon button component.
 * @param {Object} props - The component props.
 * @param {React.ComponentType} props.Icon - The icon component to be rendered.
 * @param {Function} props.onClick - The function to be called when the button is clicked.
 * @returns {JSX.Element} A span element containing the icon button.
 */
const IconButton = ({ Icon, onClick }) => (
  <span
    className="cursor-pointer flex items-center space-x-2"
    onClick={onClick}
  >
    <Icon size={22} />
  </span>
);

export default IconButton;
