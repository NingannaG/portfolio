import React from "react";
import styles from "@/app/contacts/style.module.css";

const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.profileImage}>
          <img
            className={styles.imga}
            src="https://images.pexels.com/photos/4123018/pexels-photo-4123018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <br />
          <br />
          <div className="personalDetail">
            <p className={styles.number}>Ninganna Gadade</p>
            <p className={styles.number}>8669811356</p>
            <a href="mailto:arunningu@gmail.com" className={styles.number}>
              Mail:arunningu@gmail.com
            </a>
            <br />
            <a href="mailto:arunningu@gmail.com" className={styles.number}>
              Git hub
            </a>
            <br />
            <a href="mailto:arunningu@gmail.com" className={styles.number}>
              LinkDLN
            </a>
          </div>
          </div>
          <div className={styles.contactForm}>
            <input type="text" placeholder="First Name" className={styles.contactInput}/><br />
            <input type="text" placeholder="Last Name" className={styles.contactInput}/><br />
            <input type="text" placeholder="Email Address"className={styles.contactInput}/><br />
            <input type="number" placeholder="Mobile number"className={styles.contactInput}/><br />
            <button className={styles.contactButton}>Submit</button>

          </div>
        </div>
    
    </>
  );
};

export default Page;
