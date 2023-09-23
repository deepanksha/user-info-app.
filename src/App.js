import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Home from "./components/Home";
import History from "./components/History";

import "./style/App.scss";

function App() {
  const [searchHistory, setSearchHistory] = useState([]);
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/history"
            element={
              <History
                searchHistory={searchHistory}
                setSearchHistory={setSearchHistory}
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
