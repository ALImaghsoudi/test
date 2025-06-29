import React, { useState } from "react";

export default function MintModal({ landId, onClose }: { landId: number; onClose: () => void }) {
  const [name, setName] = useState("");

  const handleMint = () => {
    alert(`Minting land #${landId} with name ${name}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4">🏗️ خرید زمین #{landId}</h2>
        <input
          className="w-full border p-2 rounded mb-4"
          placeholder="نام زمین..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleMint} className="bg-blue-500 text-white px-4 py-2 rounded">
          Mint
        </button>
      </div>
    </div>
  );
}