import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.Header}>
      <h1 className={classes.title}>
        Please<br></br> choose a dish and <br></br>enjoy your meal.
      </h1>
      <p className={classes.description}>
        If you want more information about this form check out<br></br> my
        repository on github...
      </p>
      <a
        href="https://github.com/kubajot90/Recruitment_task_dishes"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={classes.button}>VISIT GITHUB REPO</button>
      </a>
      <div className={classes.bg_shape}></div>
    </div>
  );
}

export default Header;
