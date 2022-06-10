import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactRoute from "./components/ContactRoute";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";
import MainPortfolioRoute from "./components/MainPortfolioRoute";
import PageNotFoundRoute from "./components/PageNotFoundRoute";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/contact" element={<ContactRoute />} />
          <Route path="/portfolio" element={<MainPortfolioRoute />} />
          <Route path="*" element={<PageNotFoundRoute />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
