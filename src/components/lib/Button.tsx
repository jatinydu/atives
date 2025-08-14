import type React from "react";

const variantStyles = {
    primary: "bg-linear-to-r from-accent-800 to-accent-600 text-secondary-100 hover:bg-linear-to-r hover:from-accent-700 hover:to-accent-900",
    secondary: "bg-transparent text-secondary-800 border-2 border-secondary-200 hover:border-secondary-300",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
}

const variantSizes = {
    sm: "px-md py-xs rounded-sm text-xs",
    md: "px-xl py-sm rounded-lg text-sm",
    lg: "px-4xl py-sm rounded-lg text-md",
}

const defaultStyles = "transition duration-500 flex items-center gap-2 font-sans cursor-pointer"

interface IButton{
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    label?: string;
    onClick?: () => void;
    startIcon?: React.ReactNode;
}

export default function Button({className, startIcon, variant="primary", size="md", label, onClick}:IButton) {
  return (
    <button onClick={onClick} className={`${className} ${defaultStyles} ${variantStyles[variant]} ${variantSizes[size]}`}>
        {startIcon && <span className="">{startIcon}</span>}
        <span>{label}</span>
    </button>
  )
}
