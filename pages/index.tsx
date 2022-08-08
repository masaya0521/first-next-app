import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sample from "./sample";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.container}>test</div>
      <Link href="ssr">
        <a>go to ssr</a>
      </Link>
    </div>
  );
};

export default Home;
