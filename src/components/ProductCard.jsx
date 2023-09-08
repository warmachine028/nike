import { star } from "../assets/icons"

const ProductCard = ({ imgURL, name, price }) => {
	return (
		<div className="flex flex-1 flex-col w-full max-sm:w-full hover:scale-105 duration-300 ease-in-out">
			<img src={imgURL} alt={`${name}-product`} width={282} height={282} />
			<div className="mt-8 flex justify-start gap-2.5">
				<img src={star} alt="rating" height={24} width={24} />
				<p className="font-montserrat text-xl leading-normal text-slate-gray">4.5</p>
			</div>
			<h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">{name}</h3>
			<p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">{price}</p>
		</div>
	)
}

export default ProductCard
