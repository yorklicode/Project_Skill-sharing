import React from 'react';

function Skill({ advice, quote, category, onSelect }) {
  return (
    <li className="p-2 mb-2 border rounded shadow" onClick={onSelect}>
      <p className="font-bold">{advice}</p>
      <p>Quote: {quote}</p>
      <p>Category: {category}</p>
    </li>
  );
}

export default Skill;
