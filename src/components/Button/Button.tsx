import React from 'react';

interface ButtonProps {
    children: React.ReactNode | string
}

const Button:React.FC<ButtonProps> = ({children}) => {
    return <button className="bg-sky-500 text-white">{children}</button>
}

export default Button;