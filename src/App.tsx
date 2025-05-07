
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Process";
import Security from "./pages/services/Security";
import Technology from "./pages/services/ICT";
import Construction from "./pages/services/Construction";
import Projects from "./pages/Projects";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/process" element={<Services />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/ict" element={<Technology />} />
          <Route path="/services/construction" element={<Construction />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
