import logo from './logo.svg';
import './App.css';
import PageHeader from './components/Header/PageHeader';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects';
import Contact from './components/ContactMe/Contact';
import FooterInfo from './components/Footer/FooterInfo';

function App() {
  return (
    <div className="App">
      <PageHeader />
      <Home />
      <AboutMe />
      {/* <Projects /> */}
      <Contact />
      <FooterInfo />
    </div>
  );
}

export default App;
