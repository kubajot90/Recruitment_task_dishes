import { useState } from "react";
import classes from "./Header.module.css";

function Header() {
  const [title, setTitle] = useState(
    "Please choose a dish and enjoy your meal."
  );
  const [description, setDescription] =
    useState(`If you want more information about this form check out my repository on
  github.`);
  const [repoLink, setRepoLink] = useState(
    "https://github.com/kubajot90/Recruitment_task_dishes"
  );
  const [buttonText, setButtonText] = useState("VISIT GITHUB REPO");

  return (
    <div className={classes.Header}>
      <div className={classes.bg_shape}></div>
      <h1 className={classes.title}>{title}</h1>
      <p className={classes.description}>{description}</p>
      <a href={repoLink} target="_blank" rel="noopener noreferrer">
        <button className={classes.button}>{buttonText}</button>
      </a>
    </div>
  );
}

export default Header;
