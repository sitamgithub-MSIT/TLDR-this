import React from "react";
import { IconDotsCircleHorizontal } from "@tabler/icons-react";

/**
 * A functional component that renders a mode selector dropdown.
 * @param {Object} props - The component props
 * @param {string} props.selectedMode - The currently selected mode
 * @param {function} props.setSelectedMode - Function to update the selected mode
 * @param {string[]} props.modes - Array of available modes
 * @returns {JSX.Element} A span element containing an icon and a select dropdown
 */const ModeSelector = ({ selectedMode, setSelectedMode, modes }) => (
  <span className="cursor-pointer rounded-full space-x-1 pl-2 bg-[#000000] flex items-center flex-row">
    <IconDotsCircleHorizontal size={20} className="text-gray-400" />
    <select
      value={selectedMode}
      onChange={(e) => setSelectedMode(e.target.value)}
      className="bg-[#000000] flex flex-row rounded-full py-1 text-white"
    >
      {modes.map((mode) => (
        <option key={mode} value={mode}>
          {mode}
        </option>
      ))}
    </select>
  </span>
);

export default ModeSelector;
