import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderNav from "./components/headerNav";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";
import Login from "./components/login";
import { BasketProvider } from "./Context/BasketContext";
import { initialState, reducer } from "./Context/Reducer"; // Change the import statement to match the correct file name
function App() {
  return (
    <BasketProvider initialState={initialState} reducer={reducer}>
      <Router>
        <HeaderNav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </Router>
    </BasketProvider>
  );
}

export default App;
