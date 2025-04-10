// Skapa en timer med en custom hook (3p)
// Skapa en custom hook som heter useTimer genom att flytta koden till useTimer
// Den ska returnera hur många sekunder som har gått sedan komponenten laddades.
// Använd hooken i Question5-komponenten och visa antalet sekunder på sidan.

import { useTimer } from "@/custom hook/useTimer";

export default function Question5() {
  const seconds = useTimer();

  return (
    <div className="absolute w-full h-full flex items-center justify-center flex-col">
      <h1 className="font-bold text-7xl">Question 5</h1>
      <p className="text-9xl font-bold text-green-700" >{seconds}</p>
    </div>
  );
}

//github