// Meddelanderuta med barnkomponenter (3p)
// Skapa en komponent MessageBox som visar ett meddelande inuti en ruta.

// MessageBox ska använda children för att visa innehållet i rutan.
// Du ska alltså kunna skriva t.ex.:

//<MessageBox>
//  <p>Det här är ett meddelande</p>
//</MessageBox>;

// MessageBox ska också visa en knapp "Stäng".
// När man klickar på knappen ska hela rutan tas bort (alltså inte visas längre).
// Använd MessageBox i Question3-komponenten och skicka in valfritt innehåll som children.

import { useState } from "react";

function MessageBox({ children }) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <div className="font-bold">{children}
    <button className="px-4 py-2 rounded bg-red-400" onClick={() => setVisible(false)}>Stäng</button>
  </div>)
};

export default function Question3() {
  
  return (
    <div>
      <h1>Question 3</h1>
      <MessageBox>
        <p>Det här är ett meddelande</p>
      </MessageBox>
    </div>
  );
}

//github