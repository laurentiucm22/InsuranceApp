interface InputProps {
  type: string;
  placeholder: string;
  className: string;
  value: string;
  onChange: React.ChangeEventHandler;
  id: string;
  name: string;
}

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  id,
  name,
}: InputProps) => {
  return (
    <input
      name={name}
      id={id}
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
