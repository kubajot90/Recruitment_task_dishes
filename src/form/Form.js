import { reduxForm, Field } from "redux-form";
import classes from "./Form.module.css";

const dishes = ["pizza", "soup", "sandwich"];

function Form({ handleSubmit }) {
  const submitHandler = (formData) => {
    console.log(formData);
  };

  const renderOptions = (dishes) => {
    return dishes.map((dish) => (
      <option value={dish} key={dish}>
        {dish}
      </option>
    ));
  };

  return (
    <div className={classes.Form}>
      <form className={classes.wrapper} onSubmit={handleSubmit(submitHandler)}>
        <Field
          type="text"
          name="name"
          component="textarea"
          placeholder="Name"
        />
        <Field
          type="duration"
          pattern="^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$"
          name="preparation_time"
          component="input"
          placeholder="Preparation time (HH:MM:SS)"
        />
        <Field
          type="select"
          name="type"
          component="select"
          placeholder="type"
          selectedvalue="default"
        >
          <option value="default" hidden>
            Chose type
          </option>
          {renderOptions(dishes)}
        </Field>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "simple-form",
})(Form);
