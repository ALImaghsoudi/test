import React from "react";
import LandGrid from "./components/LandGrid";
import WalletConnect from "./components/WalletConnect";

export default function App() {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">🏞️ MetaEstate MVP</h1>
      <WalletConnect />
      <div className="mt-6">
        <LandGrid />
      </div>
    </div>
  );
}