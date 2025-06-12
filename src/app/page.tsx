import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Main from "@/components/Main";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <Main />
      <About />
      <Skills />

      <Experiences />

      <Projects />
    </div>
  );
};

export default Home;
