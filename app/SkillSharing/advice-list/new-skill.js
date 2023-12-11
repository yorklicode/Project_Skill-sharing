'use client'
import React, { useState } from 'react';

function NewSkill({onAddSkill}) {
  const [adviceName, setAdviceName] = useState("");
  const [quote, setQuote] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSkill = {
      advice: adviceName,
      quote: quote,
      category: category
    };

    onAddSkill(newSkill);
    
    
    setAdviceName("");
    setQuote("");
    setCategory("");
  };

  return (
    <div className="bg-white p-6 rounded shadow-md w-100% mx-auto">
      <form onSubmit={handleSubmit}>
      <h2 className="block text-gray-700 text-sm font-bold mb-2">Add New Advice</h2>
              
              <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                      Advice: </label>
                      <input 
                          type="text"
                          value={adviceName}
                          onChange={e => setAdviceName(e.target.value)} 
                          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          placeholder="Enter advice here"
                          required
                      />
                 
              </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Quote</label>
          <input
            type="text"
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter quote here"
            required
          />
           

          
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
             <option value=" "></option>
            <option value="motivation">Motivation</option>
            <option value="education">Education</option>
            <option value="life">Life</option>
            <option value="inspiration">Inspiration</option>
            <option value="courage">Courage</option>
            <option value="innovation">Innovation</option>
            <option value="relationships">Relationships</option>
            <option value="work ethic">Work Ethic</option>
            <option value="mindfulness">Communication</option>
            <option value="happiness">Happiness</option>
            <option value="other">Other</option>
          </select>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Submit
        </button>
      </form>
    </div>
  );
}

export default NewSkill;
