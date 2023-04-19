import { useState } from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./Form.module.css";
import ConditionallyFields from "./ConditionallyFields";
import RenderField from "./RenderField";

const validate = (formData) => {
  const errors = {};

  if (!formData.name) {
    errors.name = "Describe your name";
  }
  if (!formData.no_of_slices) {
    errors.no_of_slices = "Set no of pizza slices";
  }
  if (!formData.type) {
    errors.type = "Chose type";
  }
  if (!formData.diameter) {
    errors.diameter = "Set diameter";
  }
  if (!formData.spiciness_scale) {
    errors.spiciness_scale = "Set spiciness scale";
  }
  if (!formData.slices_of_bread) {
    errors.slices_of_bread = "Set slices of bread";
  }
  if (!/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(formData.preparation_time)) {
    errors.preparation_time = "Set preparation time";
  }
  return errors;
};

function Form({ handleSubmit }) {
  const submitHandler = (formData) => {
    console.log("formdata: ", formData);
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
