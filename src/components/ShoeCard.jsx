const ShoeCard = ({ img, change, largeImg }) => {
  const handleClick = () => {
    if (largeImg !== img.bigShoe) {
      change(img.bigShoe);
    }
  };
  const isSelected = largeImg === img.bigShoe;
  return (
    <div
      className={`border-2 rounded-xl hover:scale-110 duration-300 transition ease-in-out ${
        largeImg === img.bigShoe ? 'border-coral-red' : 'border-transparent'
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className={`flex justify-center items-center bg-card bg-center bg-cover rounded-xl max-sm:p-4
			${isSelected ? 'sm:w-44 sm:h-44' : 'sm:w-40 sm:h-40'}
			`}
      >
        <img src={img.thumbnail} alt="collection" width="127" height="103" className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
