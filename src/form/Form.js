import { useState } from "react";
import { reduxForm, Field } from "redux-form";
import classes from "./Form.module.css";

const dishes = ["pizza", "soup", "sandwich"];

function Form({ handleSubmit }) {
  const [selectedValue, setSelectedValue] = useState("");
  const [rangeLabel, setRangeLabel] = useState(0);

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

  const generateRangeLabel = (e) => {
    const scale = e.target.value;

    setRangeLabel(scale);
  };

  const selectChangeHandler = (e) => {
    const selectedDish = e.target.value;

    setSelectedValue(selectedDish);
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
          onChange={selectChangeHandler}
        >
          <option value="" hidden>
            Chose type
          </option>
          {renderOptions(dishes)}
        </Field>

        {selectedValue === "pizza" && (
          <>
            <Field
              type="number"
              name="no_of_slices"
              component="input"
              placeholder="# of slices"
            />
            <Field
              type="number"
              step="0.1"
              min="0"
              max="100"
              name="diameter"
              component="input"
              placeholder="Diameter"
            />
          </>
        )}

        {selectedValue === "soup" && (
          <>
            <label htmlFor="scale"> {rangeLabel} </label>
            <Field
              type="range"
              component="input"
              id="scale"
              step="1"
              min="0"
              max="10"
              name="spiciness_scale"
              placeholder="Spiciness scale"
              onChange={generateRangeLabel}
            />
          </>
        )}

        {selectedValue === "sandwich" && (
          <Field
            // hidden={selectValue !== "sandwich" ? true : false}
            type="number"
            component="input"
            value="1"
            step="1"
            min="1"
            name="slices_of_bread"
            placeholder="Slices of bread"
          />
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "simple-form",
})(Form);
