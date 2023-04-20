import { useState } from "react";
import { reduxForm, Field } from "redux-form";
import ConditionallyFields from "./fields/ConditionallyFields";
import RenderField from "./fields/RenderField";
import validate from "./validate";
import sendData from "./sendData";
import classes from "./Form.module.css";

const Form = ({ handleSubmit, resetForm }) => {
  const [showLoader, setShowLoader] = useState(false);

  const submitHandler = async (formData) => {
    const data = parseNumbers(formData);
    console.log("formdata:", formData);
    setShowLoader(true);
    await sendData(data);
    setShowLoader(false);
    resetForm();
  };

  const parseNumbers = (formData) => {
    const data = { ...formData };

    data.no_of_slices = parseInt(data.no_of_slices);
    data.diameter = parseFloat(data.diameter);
    return data;
  };

  return (
    <div className={classes.Form}>
      <form className={classes.wrapper} onSubmit={handleSubmit(submitHandler)}>
        <p className={classes.title}>
          Welcome to <span className={classes.bold}>Dishes app</span>
        </p>
        <p className={classes.subtitle}>enter the data and submit</p>
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
        <button className={classes.button} type="submit">
          Submit
        </button>
        {showLoader && (
          <div className={classes.loader}>
            <p className={classes.loader__title}>Sending...</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default reduxForm({
  form: "dishesForm",
  validate,
  shouldValidate: () => true,
})(Form);
