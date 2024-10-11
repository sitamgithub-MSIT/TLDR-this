import React from "react";

/**
 * Renders a customized textarea component.
 * @param {object} props - The props object containing the textarea attributes.
 * @param {string} props.id - The id attribute for the textarea.
 * @param {string} props.value - The current value of the textarea.
 * @param {function} props.onChange - The function to handle value changes.
 * @param {string} props.placeholder - The placeholder text for the textarea.
 * @returns {JSX.Element} A textarea element with custom styling.
 */
const TextArea = ({ id, value, onChange, placeholder }) => (
  <textarea
    rows={7}
    id={id}
    className="py-2.5 px-4 border-none focus:outline-none block w-full border-transparent 
    rounded-lg dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;
