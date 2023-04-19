import { reduxForm, Field } from "redux-form";
import classes from "./Form.module.css";
import ConditionallyFields from "./fields/ConditionallyFields";
import RenderField from "./fields/RenderField";
import validate from "./validate";
import sendData from "./sendData";

function Form({ handleSubmit }) {
  const submitHandler = (formData) => {
    const data = { ...formData };
    data.no_of_slices = parseInt(data.no_of_slices);
    data.diameter = parseFloat(data.diameter);

    sendData(data);
  };

  return (
    <div className={classes.Form}>
      <form className={classes.wrapper} onSubmit={handleSubmit(submitHandler)}>
        <Field
          type="text"
          name="name"
          component={RenderField}
          placeholder="Name"
        />
        <Field
          type="duration"
          name="preparation_time"
          component={RenderField}
          placeholder="Preparation time (HH:MM:SS)"
        />
        <Field name="conditionallyFields" component={ConditionallyFields} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "dishesForm",
  validate,
})(Form);
