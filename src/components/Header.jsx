function Header({ currentScore, bestScore }) {
  return (
    <div className="header">
      <h3>🎮Pokemon Memory Game</h3>
      <p>Don't click the same Pokémon twice!</p>
      <div className="score-box">
        <div className="score">
          <h4>Current</h4>

          <p>{currentScore}</p>
        </div>

        <div className="score">
          <h4>Best</h4>

          <p>{bestScore}</p>
        </div>
      </div>
    </div>
  );
}
export default Header;
