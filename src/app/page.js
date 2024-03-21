"use client";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <main className={styles.main}>
      <h1>Hello</h1>
      <Link href={"/login"}>Go to Login</Link>
      <Link href={"/about"}>Go to About</Link>
      <button onClick={() => navigate("/login")}>Go to Login</button>
      <button onClick={() => navigate("/login")}>Go to About</button>
    </main>
  );
}
