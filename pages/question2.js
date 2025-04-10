// 2. Tävling (3p)
//
// Du har en klasslista där varje elev har ett namn och poäng.
// Visa varje elev med en komponent <Student> som visar namnet och poängen.
// Skapa två inputfält och en knapp för att lägga till namn och poäng för en ny elev.
// Använd en for-loop eller forEach för att räkna ut den totala summan av alla poäng.
// Visa summan längst ner på sidan.

import { useState } from "react";
let idCount = 4;

const initialStudents = [
  { id: 1, name: "Alice", points: 10 },
  { id: 2, name: "Bob", points: 8 },
  { id: 3, name: "Charlie", points: 12 },
];


function StudentName({student}){

  const { name, points } = student;

  return (
<div>
  <h2 className="font-bold">{name}</h2>
  <p>{points}</p>
</div>
  ); 
}

export default function Question2() {
  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState("");
  const [newPoints, setNewPoints] = useState("");

  function handleAddStudent() {
    const newStudent = {
      id: idCount++,
      name: newName,
      points: Number(newPoints),
    };

    setStudents([...students, newStudent]);
    setNewName("");
    setNewPoints("");
  }

  let total = 0;
  students.forEach((student) => {
    total += student.points;
  });

  return (
    <div>
      <h1>Question 2</h1>
      {students.map((student) => ( 
      <StudentName key={student.id} student={student} />   
      ))}
      
      <input
        type="text"
        placeholder="Namn"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Poäng"
        value={newPoints}
        onChange={(e) => setNewPoints(e.target.value)}
      />
      <button className="px-4 py-2 rounded bg-blue-400" onClick={handleAddStudent}>Lägg till elev</button>
      <h2 className="font-bold">Total: {total}</h2>
    </div>
  );
}

//github