import { IoMdPizza } from "react-icons/io";
import classes from "./NavBar.module.css";

function NavBar() {
  return (
    <div className={classes.NavBar}>
      <div>
        <IoMdPizza className={classes.logo_icon} />
        <span>Dishes</span>
        <span className={classes.logo_title_bold}>App</span>
      </div>
      <button className={classes.button}>CLEAR FORM</button>
    </div>
  );
}

export default NavBar;
