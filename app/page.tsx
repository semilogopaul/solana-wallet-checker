import React from "react";
import Navbar from "./components/Navbar";
import WalletChecker from "./components/WalletChecker";
import "./globals.css";

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto">
        <WalletChecker />
      </main>
      <script src="./scripts.js" />
    </div>
  );
};

export default Home;
