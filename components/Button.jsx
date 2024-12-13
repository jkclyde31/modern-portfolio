import React from 'react';

const Button = ({
  text = "Button", 
  width = "138px", 
  href = "#", 
  color = "#3C5867", 
  textColor = "#FFFFFF",
  className
}) => {
  return (
    <a
      href={href}
      className={`
        flex items-center justify-center font-bold 
        rounded-[100px] shadow-md cursor-pointer 
        transition-all duration-300 hover:opacity-90
         ${className}
      `}
      style={{
        width: width,
        height: '60px',
        backgroundColor: color,
        color: textColor,
        textDecoration: 'none'
      }}
    >
      {text}
    </a>
  );
};

export default Button;
