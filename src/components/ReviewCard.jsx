import { star } from "../assets/icons"

const ReviewCard = ({ imgURL, feedback, rating, customerName }) => {
	return (
		<div className="flex justify-center items-center flex-col">
			<img src={imgURL} alt="customer" className="rounded-full object-cover" width={120} height={120} />
			<article className="mt-6 max-w-sm text-center info-text">{feedback}</article>
			<div className="mt-3 flex justify-center items-center gap-2.5">
				<img src={star} alt="star" width={24} height={24} className="object-contain m-0" />
				<p className="text-xl font-montserrat text-slate-gray">{rating}</p>
			</div>
			<h3 className="mt-1 font-palanquin text-center text-3xl font-black">{customerName}</h3>
		</div>
	)
}

export default ReviewCard
