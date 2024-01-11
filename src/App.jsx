
import AlertBar from "./components/AlertBar/AlertBar";
import Card from "./components/Card/Card";


export default function App() {
  return (
   <div className="h-screen flex flex-col justify-center items-center">
    <Card />
    <div className="h-screen flex flex-col justify-center items-center">

    <AlertBar/>
    </div>
   </div>
  )
}