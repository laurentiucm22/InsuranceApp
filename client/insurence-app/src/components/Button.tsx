interface ButtonProps {
  children: React.ReactNode;
  className: string;
  type: "button" | "submit";
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ children, className, onClick, type }: ButtonProps) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
