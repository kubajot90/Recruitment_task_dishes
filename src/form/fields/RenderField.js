import classes from "../Form.module.css";

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
          className={classes.field}
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
          className={classes.field}
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
          className={classes.field}
        />
      );
    }
  };

  return (
    <div className={classes.field__wrapper}>
      <label className={classes.field__label}>{label}</label>
      {componentType()}
      {touched && error && (
        <span className={classes.field__error}>{error}</span>
      )}
    </div>
  );
}

export default RenderField;
