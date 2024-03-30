import Link from "next/link";
import React from "react";

const navbar = () => {
  return (
    <>
      <div className="flex justify-between text-center p-5 text-white mx-28" style={{margin:'0px 160px'}}>
        <p className="text-4xl cursor-pointer" style={{'textShadow':'2px 2px 15px blue'}}>PortFolio</p>
        <ul className="flex gap-5 text-2xl shadow-lg">
          <Link href='about'><li className=" cursor-pointer">About</li></Link>
          <Link href='projects'><li className="cursor-pointer">Projects</li></Link>
          <Link href='skills'><li className="cursor-pointer">Skills</li></Link>
          <Link href='contacts'><li className=" cursor-pointer">Contact</li></Link>
          {/* <Link href='about'><li className="cursor-pointer">Home</li></Link>
          <Link href='about'><li className="cursor-pointer">Contact</li></Link>
          <Link href='about'> <li className="cursor-pointer">Contact</li></Link> */}
        </ul>
      </div>
    </>
  );
};

export default navbar;
