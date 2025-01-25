type InputProps = React.ComponentProps<"input"> & {
  label: string;
};

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  label,
  placeholder,
  ...rest
}) => {
  return (
    <>
      {label && (
        <label htmlFor={label} style={{ fontWeight: "600" }}>
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
};

export default Input;
