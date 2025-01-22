import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chatbot from './Chatbot';

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-blue-800">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
      <div className="App" >
        <h1>Welcome to MEDI_0NE Pharmacy</h1>
        <Chatbot />
      </div>
    </main>
  );
}

export default App;