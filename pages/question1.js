// 1. Visa antal klick (3p)
//
// Skapa två knappar: "Visa räknare" och "Göm räknare".
// När man klickar på "Visa räknare", visas en räknare med texten "Du har klickat X gånger".
// Bredvid texten ska det finnas en knapp "Klicka!" som ökar räknaren med 1.
// När man klickar på "Göm räknare" ska hela räknaren försvinna.

import { useState } from "react";

export default function Question1() {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Question 1</h1>
      <button
        className="px-4 py-2 rounded bg-blue-400"
        onClick={() => setShowCounter(true)}
      >
        Visa räknare
      </button>
      <button
        className="px-4 py-2 rounded bg-red-400"
        onClick={() => setShowCounter(false)}
      >
        Göm räknare
      </button>
      {showCounter && (
        <div>
          <p>Du har klickat {count} gånger</p>
          <button
            className="px-4 py-2 rounded bg-green-400"
            onClick={handleClick}
          >
            Klicka!
          </button>
        </div>
      )}
    </div>
  );
}

//github