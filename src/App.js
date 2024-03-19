import Contact from "./Component/Contact";
import Demos from "./Component/Demos";
import Education from "./Component/Education";
import Nav from "./Component/Nav";
import Projects from "./Component/Projects";
import Who from "./Component/Who";
import WorkExperince from "./Component/WorkExperience";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Who></Who>
      <Education></Education>
      <WorkExperince></WorkExperince>
      <Projects></Projects>
      <Demos></Demos>
      <Contact></Contact>
    </div>
  );
}

export default App;
