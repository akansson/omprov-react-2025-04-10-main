// Slumpa fram citat (5p)
// Hämta citat från: https://dummyjson.com/quotes/random

// Skapa en knapp "Hämta nytt citat".
// När man klickar på den ska ett nytt citat hämtas från API:et.
// Visa citatet och författaren på sidan.

// Skapa ett context där du sparar alla citatobjekt med quote och author i en array.
// Skapa en länk "/quotes". När man klickar på den ska man se alla hämtade citat.

// Använd useEffect för att hämta ett första citat automatiskt när komponenten laddas.

import { useState } from "react";

export default function Question4() {

  const [ quote, setQuote ] = useState("");
  const [ author, setAuthor ] = useState("");

  async function fetchQuote() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const data = await response.json();
    setQuote(data.quote);
    setAuthor(data.author);
  }

  return (
    <div>
      <h1>Question 4</h1>
      <button className="px-4 py-2 rounded bg-gray-300" onClick={fetchQuote}>Hämta nytt citat</button>
      {quote && (
        <div>
          <p className="font-bold">Quote: {quote}</p>
          <p className="font-bold">Author: {author}</p>
          </div>
      )}
    </div>
  );
}
