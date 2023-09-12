import './App.css';
import AboutMe from './component/About me/AboutMe';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import Main from './component/Main/Main';
import Projects from './component/Projects/Projects';
function App() {
  return (
    <>
    <Header/>
    <Main/>
    <AboutMe/>
    <Projects/>
    <Contact/>
    <Footer/>
    </>
  );
}
export default App;
