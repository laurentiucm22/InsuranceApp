export interface InputProps {
  type: string;
  placeholder?: string;
  className?: string;
  value?: string;
  onChange?: React.ChangeEventHandler;
  id?: string;
  name: string;
  label: string;
  min?: string;
  max?: string;
  isError?: boolean;
  onBlur?: () => void;
}

const defaultStyle =
  "w-full text-black pl-6 pr-3 py-2 mt-2 mb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 font-semibold";
const errorInputStyle =
  "w-full text-black pl-6 pr-3 py-2 mb-4 rounded-lg border-2 border-red-500 outline-none bg-red-200";

const error = {
  message: "Camp Obligatoriu!",
};

const Input = ({
  type,
  placeholder,
  className,
  value,
  onChange,
  id,
  name,
  label,
  min,
  max,
  isError,
  onBlur,
}: InputProps) => {
  return (
    <>
      <label className="my-2" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={id}
        onBlur={onBlur}
        type={type}
        placeholder={placeholder}
        className={isError ? errorInputStyle : `${defaultStyle} ${className}`}
        value={value}
        onChange={onChange}
        min={min}
        max={max}
      />
      <div className="w-full">
        {value?.length === 0 && (
          <span className="text-sm text-red-400">
            {isError ? error.message : ""}
          </span>
        )}
      </div>
    </>
  );
};

export default Input;
