import Link from "next/link";
import "./login.css";

export default function Layout({ children }) {
  return (
    <div>
      <ul className="login-main">
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"/login/student"}>Student</Link>
        </li>
        <li>
          <Link href={"/login/teacher"}>Teacher</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
