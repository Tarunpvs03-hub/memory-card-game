import Card from "./Card.jsx";
function CardGrid({ cards, onCardClick }) {
  return (
    <div className="card-structure">
      {cards.map((card) => (
        <Card card={card} key={card.id} onCardClick={onCardClick} />
      ))}
    </div>
  );
}
export default CardGrid;
