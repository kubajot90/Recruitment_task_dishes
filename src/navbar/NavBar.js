import { useDispatch } from "react-redux";
import { reset } from "redux-form";
import { FaPizzaSlice } from "react-icons/fa";
import classes from "./NavBar.module.css";

function NavBar() {
  const dispatch = useDispatch();

  const resetForm = () => {
    console.log("clear");
    dispatch(reset("dishesForm"));
  };

  return (
    <div className={classes.NavBar}>
      <div className={classes.logo_wrapper}>
        <FaPizzaSlice className={classes.logo_icon} />
        <span className={classes.logo_title}>Dishes</span>
        <span className={classes.logo_title_bold}>App</span>
      </div>
      <button className={classes.button} onClick={resetForm}>
        CLEAR FORM
      </button>
    </div>
  );
}

export default NavBar;
