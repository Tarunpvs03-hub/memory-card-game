import Header from "./components/Header";
import CardGrid from "./components/CardGrid";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    fetchPokemon();
  }, []);

  const [cards, setCards] = useState([]);
  const [clickedIds, setClickedIds] = useState(new Set());
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  async function fetchPokemon() {
    const ids = new Set();
    while (ids.size < 12) {
      const randomId = Math.floor(Math.random() * 600) + 1;
      ids.add(randomId);
    }
    // const randomIds = ["pikachu", "charizard","milotic","greninja","infernape","sceptile","flygon","absol","arcanine"];
    const randomIds = [...ids];
    try {
      const promises = randomIds.map((id) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`),
      );
      const responses = await Promise.all(promises);
      const pokemonData = await Promise.all(
        responses.map((response) => response.json()),
      );

      const cards = pokemonData.map((pokemon) => {
        const { id, name, sprites } = pokemon;

        return {
          id,
          name,
          image:
            sprites.other["official-artwork"].front_default ??
            sprites.front_default,
        };
      });
      setCards(cards);
    } catch (error) {
      setError("Failed to load Pokemon");
    } finally {
      setLoading(false);
    }
  }
  function handleClick(id) {
    if (clickedIds.has(id)) {
      setClickedIds(new Set());
      setCurrentScore(0);
      setCards(shuffleCards(cards));
      return;
    } else {
      const newSet = new Set(clickedIds);
      newSet.add(id);
      setClickedIds(newSet);
      const newScore = currentScore + 1;
      if (newScore === 12) {
        alert("🎉 You Win!");
        setCurrentScore(0);
        setClickedIds(new Set());
        fetchPokemon();
        setLoading(true);
        return;
      }
      setCurrentScore(newScore);
      setBestScore((prev) => Math.max(prev, newScore));
    }
    setCards(shuffleCards(cards));
  }
  function shuffleCards(cards) {
    const shuffled = [...cards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [shuffled[i], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[i],
      ];
    }
    return shuffled;
  }

  if (loading) {
    return <div className="loading">Loading Pokemon...</div>;
  }
  if (error) {
    return <h2 className="error">{error}</h2>;
  }
  return (
    <div className="app">
      <Header currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleClick} />
    </div>
  );
}
export default App;
