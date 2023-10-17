import { star } from '../assets/icons';

const ReviewCard = ({ review }) => {
  return (
    <div className="inline-flex justify-center items-center flex-col mt-6" style={{ width: '100%' }}>
      <img src={review.imgURL} alt="customer" className="rounded-full object-cover" width={120} height={120} />
      <article className="carousel-item-text mt-6 w-full text-center dark:text-gray-300 info-text">
        {review.feedback}
      </article>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray dark:text-gray-300">{review.rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center text-3xl font-black dark:text-gray-200">{review.customerName}</h3>
    </div>
  );
};

export default ReviewCard;
