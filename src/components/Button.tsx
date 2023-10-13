// src/components/Button.js
import React from "react";
import { classNames } from "./Utils";
import { IconType } from "react-icons";

interface ButtonProps {
    text?: string    
    // border?: string
    color?: string
    // bgColor?: string
    icon?: IconType
    classes?: string
    // align?: string
    // radius?: string
    onClick: () => void
}

export function Button_old({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "gap-2 items-center px-4 justify-center flex flex-row  text-white bg-blue-600 rounded-lg font-semibold hover:bg-blue-400 p-2",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Button({text , color, icon : Icon, classes, onClick}){ 
  return (
    <button onClick={onClick} className={`${classes}`}>
        {Icon && (
            <Icon size={20} color={color} />
        )}
        {text!==undefined && text}
    </button>
);
}

export function PageButton({ children, className, ...rest }) {
  return (
    <button
      type="button"
      className={classNames(
        "relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
