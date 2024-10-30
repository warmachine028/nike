import './ShoeCard.scss';

const ShoeCard = ({ img, change, largeImg }) => {
  const handleClick = () => {
    if (largeImg !== img.bigShoe) {
      change(img.bigShoe);
    }
  };
  const isSelected = largeImg === img.bigShoe;
  return (
    <div
      id="🔥ShoeCard"
      className={`${largeImg === img.bigShoe ? '--largeImgTrue' : '--largeImgFalse'} `}
      onClick={handleClick}
    >
      <div id="🔥ShoeCard__X" className={`${isSelected ? '--isSelectedTrue' : '--isSelectedFalse'} `}>
        <img id="🔥ShoeCard__X__Img" src={img.thumbnail} alt="collection" width="127" height="103" />
      </div>
    </div>
  );
};

export default ShoeCard;
