import { star } from '../assets/icons';
import { useState } from 'react';

const ReviewCard = ({ review }) => {
  const [viewMoreFeedback, setViewMoreFeedback] = useState(false);
  return (
    <div
      className="p-10  rounded-xl inline-flex justify-center items-center flex-col mt-6 hover:scale-110 duration-300 dark:bg-slate-800 transition ease-in-out"
      style={{ width: '100%' }}
    >
      <img
        src={review.imgURL}
        alt="customer"
        className="rounded-full border-4 p-1 border-white-400 object-cover"
        width={120}
        height={120}
      />

      <article
        className={`${
          viewMoreFeedback ? 'h-auto overflow-auto' : 'h-[82px] overflow-hidden'
        } carousel-item-text mt-6 text-center dark:text-gray-300 info-text max-w-[400px]`}
      >
        {review.feedback}
      </article>
      <p
        className="inline-block text-sm cursor-pointer text-blue-600  transition-all duration-300 hover:underline"
        onClick={() => setViewMoreFeedback((prev) => !prev)}
      >
        ...{viewMoreFeedback ? 'view less' : 'view more'}
      </p>

      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray dark:text-gray-300">{review.rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center text-3xl font-black dark:text-gray-200">{review.customerName}</h3>
    </div>
  );
};

export default ReviewCard;
