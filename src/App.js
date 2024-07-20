import "./styles/main.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ProjectItem from "./pages/Project";
import Contacts from "./pages/Contacts";


function App() {
  return (
    <div className="App">
     
      <Navbar />

      {/* <Home /> */}
      {/* <Projects /> */}
      <ProjectItem />
      {/* <Contacts /> */}

      <Footer />

    </div>
  );
}

export default App;

