import React from "react";
import style from "@/app/skills/style.module.css";

const page = () => {
  return (
    <>
      <div className={style.container}>
        <div className={style.skillBox}>
          <h1 className={style.headingText}>Front-End :</h1>
          <p className={style.skillText}>HTML</p>
          <p className={style.skillText}>CSS</p>
          <p className={style.skillText}>Java Script</p>
          <p className={style.skillText}>React JS</p>
          <p className={style.skillText}>Next JS</p>
        </div>
        <div className={style.skillBox}>
          <h1 className={style.headingText}>CSS Library</h1>
          <p className={style.skillText}>Bootsrtap</p>
          <p className={style.skillText}>Tail Wind CSS</p>
        </div>
        <div className={style.skillBox}>
          <h1 className={style.headingText}>Back-End :</h1>
          <p className={style.skillText}>Node JS JS</p>
          <p className={style.skillText}>Express JS</p>
        </div>
        <div className={style.skillBox}>
          <h1 className={style.headingText}>Data Base :</h1>
          <p className={style.skillText}>Mongo DB</p>
        </div>
        <div className={style.skillBox}>
          <h1 className={style.headingText}>Others :</h1>
          <p className={style.skillText}>Kafka</p>
          <p className={style.skillText}>Redis</p>
        </div>
      </div>
    </>
  );
};

export default page;
