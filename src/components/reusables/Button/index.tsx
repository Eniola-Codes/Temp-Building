import React from "react";
import Link from "next/link";

interface ButtonProps {
  link?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  isBtnLoading: boolean | undefined;
}

const Button: React.FC<ButtonProps> = (props) => {
  if (props.link) {
    // Render a button as a link using Next.js Link component
    return (
      <a
        href={props.link}
        className={`block  text-center py-3.5 text-light border sm:w-52 w-44 rounded-sm transition-all duration-300 ${props.className}`}
      >
        {props.children}
      </a>
    );
  }

  // Render a regular button
  return (
    <button
      type={props.type}
      className={`block text-center py-3.5 text-light sm:w-48 w-44 border rounded-sm hover:bg-primaryhover transition-all duration-300 ${
        props.isBtnLoading && "cursor-not-allowed"
      }  ${props.className}`}
      onClick={props.onClick}
      disabled={props.isBtnLoading}
    >
      {props.isBtnLoading ? <span>Loading...</span> : props.children}
    </button>
  );
};

export default Button;
