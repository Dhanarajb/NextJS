import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      About us
      <br />
      <br />
      <Link href={"/"}>Go to Home Page</Link>
      <br />
      <br />
      <br />
      <Link href={"/about/college"}>Go to College Page</Link>
      <br />
      <br />
      <Link href={"/about/student"}>Go to Student Page</Link>
    </div>
  );
};

export default About;
