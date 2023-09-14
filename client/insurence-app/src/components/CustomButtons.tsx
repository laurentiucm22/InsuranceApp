import React from "react";

const ButtonStyleTypes = {
  loginBtn:
    "bg-blue-700 hover:bg-blue-800 text-sm text-white uppercase text-center rounded bg-primary-100 px-6 p-2.5 font-medium leading-normal transition duration-150 ease-in-out",

  creareContBtn:
    "text-white text-sm w-full text-md text-center p-2.5 font-medium rounded border border-white mt-4 uppercase",

  creazaOfertaBtn:
    "rounded px-2  md:px-6 py-2 font-medium uppercase leading-normal text-white bg-transparent transition-all ease-in duration-200 outline-1 outline outline-white text-sm",

  cancelBtn:
    "outline-1 outline outline-white uppercase hover:bg-red-300 transition-all ease-in duration-200 ml-1 inline-block rounded px-6 py-2 text-sm font-medium leading-normal text-white",

  defaultBtn: "",
};

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  styleType: keyof typeof ButtonStyleTypes;
  disabled?: boolean;
}

const Button = ({
  children,
  className,
  onClick,
  type,
  styleType,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${className} ${ButtonStyleTypes[styleType] as string}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
