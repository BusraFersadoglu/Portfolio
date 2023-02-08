import Head from "next/head";
import Navbar from "@/components/navbar.js";
import Intro from "@/components/intro.js";
import Project from "@/components/project.js";
import About from "@/components/about.js";

export default function Home() {
  return (
    <div className="home">
      <Head>
        <title>Büşra Ferşadoğlu</title>
      </Head>
      <Navbar />
      <Intro />
      <About />
      <Project />
    </div>
  );
}
