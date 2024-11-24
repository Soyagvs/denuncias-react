import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Hero } from "./pages/Hero"
import { Home } from "./pages/Home";
import { Footer } from "./component/Footer";



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
