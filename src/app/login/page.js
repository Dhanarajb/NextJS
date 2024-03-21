"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
const Login = () => {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1>Hello Login page</h1>
      <br />
      <br />
      <br />
      <Link href={"/"}>Go to Home Page</Link>
      <br />
      <button onClick={() => navigate("/login/student")}>
        Go to Student Page
      </button>
      <br />
      <button onClick={() => navigateh("/login/teacher")}>
        Go to Teacher Page
      </button>
      <br />
    </div>
  );
};
export default Login;
