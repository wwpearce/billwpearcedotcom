import './Card.scss';

const Card = ({ headline, bodyCopy, isMiddle }) => {
  return (
    <div className={`Card ${isMiddle ? 'middle' : ''}`}>
      <h2 className="card-headline">{headline}</h2>
      <p className="card-body">{bodyCopy}</p>
    </div>
  );
};

export default Card;
