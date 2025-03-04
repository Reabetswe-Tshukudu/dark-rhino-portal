
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Process";
import Security from "./pages/services/Security";
import Technology from "./pages/services/ICT";
import Construction from "./pages/services/Construction";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/security" element={<Security />} />
          <Route path="/services/technology" element={<Technology />} />
          <Route path="/services/construction" element={<Construction />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
