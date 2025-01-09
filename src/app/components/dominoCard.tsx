'use client'
import React from 'react';
import { DominoNumbers, getDominoTotal } from '../../app/utils';

const DominoCard = ({ numbers, onClick }: { numbers: DominoNumbers; onClick: () => void }) => {
  const total = getDominoTotal(numbers);

  return (
    <div 
      className="w-24 h-36 m-2 cursor-pointer rounded-lg border border-gray-300 bg-white shadow-sm hover:shadow-lg transition-shadow flex flex-col items-center justify-center"
      onClick={onClick}
    >
      <div className="text-2xl font-bold">{numbers[0]}</div>
      <div className="my-2 border-t-2 w-16"></div>
      <div className="text-2xl font-bold">{numbers[1]}</div>
      <div className="mt-2 text-sm text-gray-500">{`Total: ${total}`}</div>
    </div>
  );
};

export default DominoCard;
