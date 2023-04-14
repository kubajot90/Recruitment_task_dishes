import Header from "./header/Header";
import Form from "./form/Form";
import classes from "./Main.module.css";

function Main() {
  return (
    <div className={classes.Main}>
      <Header />
      <Form />
    </div>
  );
}

export default Main;
