import About from "./About";
import Contact from "./Contact";
import EngineeringTopics from './EngineeringTopics';
import Home from "./Home";

function App() {
  const currentYear = new Date().getFullYear();
  const isLoggedIn = true;
  return (
    <div>
      <h1>ENSF-381: Full Stack Web Development</h1>
      <p>React Components.</p>
      <p>Current Year: {currentYear}</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>

      <Home title="Home Page" description="Welcome to our website." />
      <About title="About Us" description="We are passionate about delivering quality experiences." />
      <Contact title="Contact Us" description="Feel free to reach out to us viaemail or phone." />
      <EngineeringTopics/>
    </div>
  );
}

export default App;