import "./styles/main.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
     
      <Navbar />

      {/* <Home /> */}
      <Projects />

      <Footer />

    </div>
  );
}

export default App;

