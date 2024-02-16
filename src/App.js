import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Discover from "./pages/Discover";
import Footer from "./components/Footer";
import { AppContainer, Content }  from "./AppStyle";

function App() {
  const [search, setSearch] = useState("");

  return (
    <Router>
      <MovieProvider>
        <AppContainer>
          <Navbar search={search} setSearch={setSearch} />
          <Content>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover search={search} />} />
            </Routes>
          </Content>
          <Footer />
        </AppContainer>
      </MovieProvider>
    </Router>
  );
}

export default App;