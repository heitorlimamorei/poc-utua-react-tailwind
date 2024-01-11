import { useState } from "react";

import AlertBar from "./components/AlertBar/AlertBar";
import Card from "./components/Card/Card";


export default function App() {
  const [isRed, setIsRed] = useState(false);
  return (
   <div className="h-screen flex flex-col justify-center items-center">
    <Card />
   </div>
  )
}