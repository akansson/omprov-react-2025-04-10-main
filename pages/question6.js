// Callback från barnkomponent (3p)
// Skapa en barnkomponent som heter ChildButton.

// ChildButton ska ta emot en prop som heter onClick.
// Inuti ChildButton ska det finnas en knapp som anropar onClick när man klickar.

// I Question6-komponenten ska du visa en text som ändras till "Barnet klickade!"
// när man klickar på knappen i ChildButton

import { useState } from "react";

function ChildButton({ onClick }) {
  return <button className="font-bold px-4 py-2 rounded bg-green-300" onClick={onClick}>onClick</button>
}

export default function Question6() {

  const [ text, setText ] = useState("Tryck på knappen för att anropa onClick");

  const handleClick = () => {
    setText("Barnet klickade!");
  };

  return (
    <div>
      <h1>Question 6</h1>
      <p className="font-bold text-blue-700">{text}</p>
      <ChildButton onClick={handleClick} />
    </div>
  );
}

//github