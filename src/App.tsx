import './index.css';

import { Top } from './components/Top/Top';
import { Profile } from './components/Profile/Profile';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { TypesServices } from './components/TypesServices/TypesServices';
import { MySkills } from './components/MySkills/MySkills';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <Top />

      <main>
        <Profile />
        <AboutMe />
        <Projects />
        <TypesServices />
        <MySkills />
        <Contact />
      </main>
    </>
  );
}

export default App;