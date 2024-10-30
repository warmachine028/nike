import { star } from '../assets/icons';
import { useState } from 'react';
import './ReviewCard.scss';

const ReviewCard = ({ review }) => {
  const [viewMoreFeedback, setViewMoreFeedback] = useState(false);
  return (
    <div id="🔥ReviewCard" style={{ width: '100%' }}>
      <img id="🔥ReviewCard__Img" src={review.imgURL} alt="customer" width={120} height={120} />

      <article
        id="🔥ReviewCard__X"
        className={`${viewMoreFeedback ? '--viewMoreFeedbackTrue' : '--viewMoreFeedbackFalse'} `}
      >
        {review.feedback}
      </article>
      <p id="🔥ReviewCard__P" onClick={() => setViewMoreFeedback((prev) => !prev)}>
        ...{viewMoreFeedback ? 'view less' : 'view more'}
      </p>

      <div id="🔥ReviewCard__X2">
        <img id="🔥ReviewCard__X2__Img" src={star} alt="star" width={24} height={24} />
        <p id="🔥ReviewCard__X2__P">{review.rating}</p>
      </div>
      <h3 id="🔥ReviewCard__H3">{review.customerName}</h3>
    </div>
  );
};

export default ReviewCard;
