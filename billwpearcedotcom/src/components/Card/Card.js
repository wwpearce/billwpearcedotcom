import './Card.scss';

const Card = ({ headline, bodyCopy }) => {
  return (
    <div className="card">
      <h2 className="card-headline">{headline}</h2>
      <p className="card-body">{bodyCopy}</p>
    </div>
  );
};

export default Card;
