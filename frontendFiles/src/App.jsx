import './App.css';
import { useRef, useState, useEffect } from 'react';
import Header from './sections/header/header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/projects/portfolio';
import FAQs from './sections/faqs/faqs';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';
import FloatingNav from './sections/floating-nav/floatingNav';
import Navbar from './sections/navbar/navBar';

function App() {
  const prevScrollY = useRef();
  const [SiteYposition, setSiteYposition] = useState(0);
  const [isFloatingNavVisible, setFloatingNavVisible] = useState(true);
  const showfloatingNavHandler = () => {
    setFloatingNavVisible(true);
  };
  const hidefloatingNavHandler = () => {
    setFloatingNavVisible(false);
  };
  const floatingBarToggleHandller = () => {
    if (
      SiteYposition < prevScrollY.current.getBoundingClientRect().y - 30 ||
      SiteYposition > prevScrollY.current.getBoundingClientRect().y + 30
    ) {
      showfloatingNavHandler();
    } else {
      hidefloatingNavHandler();
    }
    setSiteYposition(prevScrollY.current.getBoundingClientRect().y);
  };
  useEffect(() => {
    const checkYposition = setInterval(floatingBarToggleHandller, 2000);
    return () => clearInterval(checkYposition);
  }, [SiteYposition]);
  return (
    <main className="App" ref={prevScrollY}>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <FAQs />
      <Contact />
      <Footer />
      {isFloatingNavVisible && <FloatingNav />}
    </main>
  );
}
export default App;
