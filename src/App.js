import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <Header />
      <div className="container mx-auto text-white">
        <Routes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
