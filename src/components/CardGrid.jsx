import Card from "./Card.jsx";
function CardGrid({ cards }) {
  return (
    <div className="card-structure">
      {cards.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
}
export default CardGrid;
