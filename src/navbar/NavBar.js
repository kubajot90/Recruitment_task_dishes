import { FaPizzaSlice } from "react-icons/fa";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.NavBar}>
      <div className={classes.logo_wrapper}>
        <FaPizzaSlice className={classes.logo_icon} />
        <span className={classes.logo_title}>Dishes</span>
        <span className={classes.logo_title_bold}>App</span>
      </div>
      <button className={classes.button}>CLEAR FORM</button>
    </div>
  );
}

export default NavBar;
