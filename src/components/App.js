import { NavBar } from './NavBar';
import { Banner } from './Banner';
import { About } from './About';
import { Skills } from './Skills';
import { Projects } from './Projects';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
