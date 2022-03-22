export interface iCard {
  image: string;
  title: string;
  comment: string;
}

export interface iCardSection {
  id: string;
  title?: string;
  cards: iCard[];
  className?: string | null;
}

const CardSection = ({ id, title = '', cards, className = '' }: iCardSection) => {
  return (
    <section className={`${className ? className : ''}`} id={id}>
      <h2 className="heading colorvioleta">{title}</h2>

      <div className="box-container">
        {cards.map(({ image, title, comment }) => (
          <CardItemSection key={title} image={image} title={title} comment={comment} />
          // <div className="box">
          //   <img src={tcard.image} alt={tcard.title} />
          //   <h3>{tcard.title}</h3>
          //   <p>{tcard.comment}</p>
          // </div>
        ))}
      </div>
    </section>
  );
};

const CardItemSection = ({ image, title, comment }: iCard) => (
  <div className="box">
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{comment}</p>
  </div>
);

export default CardSection;
