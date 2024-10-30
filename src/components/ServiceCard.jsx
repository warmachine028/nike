/** @format */
import './ServiceCard.scss';

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div id="🔥ServiceCard">
      <div id="🔥ServiceCard__X">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 id="🔥ServiceCard__H3">{label}</h3>
      <article id="🔥ServiceCard__X2">{subtext}</article>
    </div>
  );
};

export default ServiceCard;
