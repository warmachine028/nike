/** @format */

const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full hover:scale-105 duration-300 ease-in-out rounded-[20px] shadow-3xl px-10 py-16 dark:bg-gray-800">
      <div className="w-11 h-11  flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold dark:text-slate-200">{label}</h3>
      <article className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray dark:text-slate-300">
        {subtext}
      </article>
    </div>
  );
};

export default ServiceCard;
