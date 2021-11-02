import "./App.css";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="h-screen bg-gradient-radial from-primary to-primaryGradient">
      <Header />
      {/* <div className="rounded-full h-5 w-5 bg-secondary"></div> */}
      <Landing />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
