import { star } from '../assets/icons';

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
  return (
    <div className="inline-flex justify-center items-center flex-col hover:scale-110 duration-300 dark:bg-slate-800 transition ease-in-out">
      <img src={imgURL} alt="customer" className="rounded-full object-cover" width={120} height={120} />
      <article className="mt-6 max-w-sm text-center info-text dark:text-gray-300">{feedback}</article>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
        <p className="text-xl font-montserrat text-slate-gray dark:text-gray-300">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-center text-3xl font-black dark:text-gray-200">{customerName}</h3>
    </div>
  );
};

export default ReviewCard;
