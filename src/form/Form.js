import { reduxForm, Field } from "redux-form";
import classes from "./Form.module.css";

function Form() {
  return (
    <div className={classes.Form}>
      {/* <div className={classes.wrapper}> */}
      <form className={classes.wrapper}>
        <Field name="firstName" component="input" placeholder="Name" />
      </form>
      {/* </div> */}
    </div>
  );
}

export default reduxForm({
  form: "simple-form",
})(Form);
// export default Form;
