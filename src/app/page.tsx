'use client';
import React, { useState } from 'react';
import {
  countDoubles,
  INITIAL_DOMINOES,
  sortDominoes,
  removeDuplicates,
  flipDominoes,
  removeDominoesByTotal,
  SortOrder,
} from './utils';
import DominoCard from './components/dominoCard';

export default function Home() {
  const [dominoes, setDominoes] = useState(INITIAL_DOMINOES);
  const [removeTotal, setRemoveTotal] = useState<number | ''>('');

  const double = countDoubles(dominoes);

  const handleSort = (order: SortOrder) => {
    const sorted = sortDominoes(dominoes, order);
    setDominoes(sorted);
  };

  const handleRemoveDuplicates = () => {
    const uniqueDominoes = removeDuplicates(dominoes);
    setDominoes(uniqueDominoes);
  };

  const handleFlip = () => {
    const flipped = flipDominoes(dominoes);
    setDominoes(flipped);
  };

  const handleRemoveByTotal = () => {
    if (typeof removeTotal === 'number') {
      const filtered = removeDominoesByTotal(dominoes, removeTotal);
      setDominoes(filtered);
    }
  };

  const handleReset = () => {
    setDominoes(INITIAL_DOMINOES);
    setRemoveTotal('');
  };

  return (
    <div className="m-20">
      <h1 className="font-bold text-2xl">Dominoes</h1>

      {/* Source */}
      <div className="border rounded border-gray-400 p-4 mt-4">
        <h3 className="font-bold">Source</h3>
        <div className="mt-2">{JSON.stringify(INITIAL_DOMINOES)}</div>
      </div>

      {/* Double Numbers */}
      <div className="border rounded border-gray-400 p-4 mt-4">
        <h3 className="font-bold">Double Numbers</h3>
        <div className="mt-2">Total Doubles: {double}</div>
      </div>

      {/* Domino Actions */}
      <div className="mt-4 space-x-4">
        <button
          onClick={() => handleSort('asc')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sort Ascending
        </button>
        <button
          onClick={() => handleSort('desc')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sort Descending
        </button>
        <button
          onClick={handleRemoveDuplicates}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove Duplicates
        </button>
        <button
          onClick={handleFlip}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Flip Dominoes
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>

      {/* Remove Total */}
      <div className="mt-4">
        <label className="block font-bold mb-2">Remove Dominoes by Total</label>
        <input
          type="number"
          value={removeTotal}
          onChange={(e) => setRemoveTotal(Number(e.target.value) || '')}
          className="border rounded p-2 mr-2"
          placeholder="Enter total to remove"
        />
        <button
          onClick={handleRemoveByTotal}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Remove
        </button>
      </div>

      {/* Domino Cards */}
      <div className="mt-4 grid grid-cols-4 gap-4">
        {dominoes.map((domino, index) => (
          <DominoCard
            key={index}
            numbers={domino}
            onClick={() => console.log(`Clicked domino: ${domino}`)}
          />
        ))}
      </div>
    </div>
  );
}
