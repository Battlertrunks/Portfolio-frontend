import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeRoute from "./components/HomeRoute";

function App() {
  return (
    <main className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
