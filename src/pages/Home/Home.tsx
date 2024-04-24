import Navbar from "../components/Navbar/Navbar"
import About from "./sections/About/About"
import Hero from "./sections/Hero/Hero"
import Projects from "./sections/Projects/Projects"

const Home = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <About />    
    <Projects />
    </>
  )
}

export default Home