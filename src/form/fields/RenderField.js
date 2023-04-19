function RenderField({
  input,
  label,
  type,
  name,
  placeholder,
  min,
  max,
  step,
  meta: { touched, error },
  children,
  onSelectDish,
}) {
  const componentType = () => {
    if (type === "select") {
      return (
        <select
          {...input}
          type={type}
          name={name}
          onChange={(e) => {
            input.onChange(e.target.value);
            onSelectDish(e);
          }}
        >
          {children}
        </select>
      );
    } else if (type === "text") {
      return (
        <textarea
          {...input}
          type={type}
          name={name}
          placeholder={placeholder}
        ></textarea>
      );
    } else {
      return (
        <input
          {...input}
          type={type}
          name={name}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
        />
      );
    }
  };

  return (
    <div>
      {label && <label>{label}</label>}
      {componentType()}
      {touched && error && <span>{error}</span>}
    </div>
  );
}

export default RenderField;
