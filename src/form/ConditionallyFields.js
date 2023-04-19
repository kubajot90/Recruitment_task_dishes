import { useState } from "react";
import { Field } from "redux-form";
import RenderField from "./RenderField";

const dishes = ["pizza", "soup", "sandwich"];

const ConditionallyFields = ({ meta: { touched, error } }) => {
  const [selectedDish, setSelectedDish] = useState("");
  const [rangeLabel, setRangeLabel] = useState(0);

  const renderOptions = (dishes) => {
    return (
      <>
        <option value="" hidden>
          Chose type
        </option>
        {dishes.map((dish) => (
          <option value={dish} key={dish}>
            {dish}
          </option>
        ))}
      </>
    );
  };

  const generateRangeLabel = (e) => {
    const scale = e.target.value;

    setRangeLabel(scale);
  };

  const selectChangeHandler = (e) => {
    const selectedDish = e.target.value;
    console.log("select change handler - selected dish: ", selectedDish);
    setSelectedDish(selectedDish);
  };

  return (
    <>
      <Field
        type="select"
        name="type"
        component={RenderField}
        onSelectDish={selectChangeHandler}
      >
        {renderOptions(dishes)}
      </Field>
      {touched.type && error.type && <span>{error}</span>}

      {selectedDish === "pizza" && (
        <>
          <Field
            type="number"
            name="no_of_slices"
            component={RenderField}
            min="1"
            placeholder="# of slices"
          />
          <Field
            type="number"
            step="0.1"
            min="0"
            max="100"
            name="diameter"
            component={RenderField}
            placeholder="Diameter"
          />
        </>
      )}

      {selectedDish === "soup" && (
        <>
          {/* <label htmlFor="scale"> {rangeLabel} </label> */}
          <Field
            type="range"
            component={RenderField}
            label={rangeLabel}
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

      {selectedDish === "sandwich" && (
        <Field
          type="number"
          component={RenderField}
          value="1"
          step="1"
          min="1"
          name="slices_of_bread"
          placeholder="Slices of bread"
        />
      )}
    </>
  );
};

export default ConditionallyFields;
