import React from "react";
import style from "@/app/components/style.module.css";

const SingleProjetc = (props) => {
  console.log(props);
  return (
    <div className={style.cont}>
      <div className={style.container}>
        <div className={style.title}>{props.title}</div>

        <p className={style.techStack}>
          Tech Stack: <b>React JS, Node JS,Bootstrap,Redux</b>
        </p>
        <div className={style.links}>
          <a  href="#" className={style.linkes}>Live Link</a>
          <a href={props.links}className={style.linkes}>Git Hub Link</a>
        </div>
      </div>
    </div>
  );
};
export default SingleProjetc;
