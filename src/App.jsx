import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([
    {
      id: 1,
      name: "Arcanine",
      image: "...",
    },
    {
      id: 2,
      name: "Greninja",
      image: "...",
    },
    {
      id: 3,
      name: "Secptile",
      image: "...",
    },
    {
      id: 4,
      name: "Infernape",
      image: "...",
    },
    {
      id: 5,
      name: "Milotic",
      image: "...",
    },
    {
      id: 6,
      name: "Flygon",
      image: "...",
    },
  ]);
  return (
    <div>
      <Header />
      <CardGrid cards={cards} />
    </div>
  );
}
export default App;
