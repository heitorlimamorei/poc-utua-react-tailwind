import { useState } from "react";
import Card from "./components/Card";

export default function App() {
  const [isRed, setIsRed] = useState(false);
  return (
   <div className="h-screen flex flex-col justify-center items-center">
    <button onClick={() => setIsRed(c => !c)}>is Red</button>
    <Card className={isRed && "text-red-500"} />
   </div>
  )
}