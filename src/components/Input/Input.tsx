type InputProps = React.ComponentProps<"input">;

const Input: React.FC<InputProps> = ({
  type,
  value,
  id,
  placeholder,
  ...rest
}) => {
  return (
    <input
      type={type}
      id={id}
      name={id}
      value={value}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default Input;
