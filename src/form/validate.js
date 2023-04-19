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

export default validate;
