import React, { useState, useEffect } from 'react';

function App() {
  
  const [quotes, setQuotes] = useState([]);

  
  useEffect(() => {
   
    fetch('https://dummyjson.com/quotes')
      .then((response) => response.json()) 
      .then((data) => {
       
        setQuotes(data.quotes.slice(0, 10));
      })
      .catch((error) => console.error('Error fetching quotes:', error));
  }, []); 
  return (
    <div>
      <h2>Quotes</h2>
     
      {quotes.map((quote) => (
        <h1 key={quote.id}>{quote.quote}</h1> 
      ))}
    </div>
  );
}

export default App;
