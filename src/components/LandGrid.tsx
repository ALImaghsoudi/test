import React, { useState } from "react";
import MintModal from "./MintModal";

const GRID_SIZE = 10;

export default function LandGrid() {
  const [selectedLand, setSelectedLand] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-10 gap-[2px] bg-black">
      {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, i) => (
        <div
          key={i}
          className="w-10 h-10 bg-green-400 hover:bg-green-600 cursor-pointer"
          onClick={() => setSelectedLand(i)}
        ></div>
      ))}
      {selectedLand !== null && (
        <MintModal landId={selectedLand} onClose={() => setSelectedLand(null)} />
      )}
    </div>
  );
}