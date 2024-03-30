import React from "react";
import styles from "@/app/projects/style.module.css";
import SingleProjetc from '@/app/components/SingleProjetc'


const page = () => {
  const projects = [
    {
      Name: "Social Media Clone",
      id: 1,
      TechStack: ["React JS ", "NodeJS", "Express", "Bootstrap", "Redux"],
    },
    {
      Name: "Instagram Clone",
      id: 2,
      TechStack: ["React", "NodeJS", "Express", "Redux"],
    },
    { Name: "NewsAPI", id: 3, TechStack: ["React", "CSS"] },
    { Name: "Portfolio", id: 4, TechStack: ["Next JS", "Tailwind CSS"] },
  ];

  return (
    <div>
      <div className={styles.container}>
        {/* {projects.map((project) => { */}
         <SingleProjetc title='E-Commerce Website' links='https://github.com/NingannaG/myECommerceWebsite'/>
         <SingleProjetc title= 'Social Media Website'links='https://github.com/NingannaG/Social--Media_Website' />
         <SingleProjetc title='Fortfolio'links='https://github.com/NingannaG/InstaClone.git'/>
         <SingleProjetc title='instagram clone(Basic)' links='https://github.com/NingannaG/InstaClone.git'/>
         <SingleProjetc title='To-Do app'links='https://github.com/NingannaG/DemoPOC.git'/>
         <SingleProjetc title='News App' links='https://github.com/NingannaG/NewsApp'/>
{/* })} */}
      </div>
    </div>
  );
};

export default page;
