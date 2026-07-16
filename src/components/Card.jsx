function Card({ card }) {
  return (
    <div className="card">
      <img src="{card.image}" alt={`${card.name}image`} />
      <h3>{card.name}</h3>
    </div>
  );
}
export default Card;
