import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutMe from './Components/Aboutme';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Resume from './Components/resume';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('AboutMe');

  const renderSection = () => {
    switch (currentSection) {
      case 'AboutMe':
        return <AboutMe />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <div>
      <Header
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <main>{renderSection()}</main>
      <Footer />
    </div>
  );
}

export default App;
