import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Field } from "redux-form";
import RenderField from "./RenderField";
import { conditionallyFieldsActions } from "../store/conditionallyFieldsSlice";

const dishes = ["pizza", "soup", "sandwich"];

const ConditionallyFields = ({ meta: { touched, error } }) => {
  const dispatch = useDispatch();
  const selectedDish = useSelector(
    (state) => state.conditionallyFields.selectedDish
  );
  const rangeLabel = useSelector(
    (state) => state.conditionallyFields.rangeLabel
  );

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

    dispatch(conditionallyFieldsActions.setRangeLabel(scale));
  };

  const selectChangeHandler = (e) => {
    const selectedDish = e.target.value;
    dispatch(conditionallyFieldsActions.selectDish(selectedDish));
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
