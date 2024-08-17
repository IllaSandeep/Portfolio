import styles from './App.module.css';
import Navbar from './navbar';
import Hero from './Hero/Hero';
import About from './About/About';
import Experience from './Experience/Experience';
import Projects from './Projects/Projects'
import Contact from './contact/Contact';
import Education from './Education/Education';
function App() {
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <Education/>
      <About/>
      <Experience/>
      <Projects/>
      <Contact/>

    </div>
  );
}
export default App
