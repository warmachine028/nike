const Button = ({ children, backgroundColor, borderColor, textColor, fullWidth, icon }) => {
	console.log(
		backgroundColor
			? `${backgroundColor} ${borderColor} ${textColor} hover:text-${backgroundColor.slice(3)} hover:bg-${borderColor.slice(7)}`
			: "bg-coral-red border-coral-red text-white  hover:text-coral-red hover:border-coral-red hover:bg-white"
	)
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 
				border font-montserrat text-lg leading-none rounded-full 
				
				${
					backgroundColor
						? `${backgroundColor} ${borderColor} ${textColor} hover:text-white hover:bg-slate-gray`
						: "bg-coral-red border-coral-red text-white  hover:text-coral-red hover:border-coral-red hover:bg-white"
				}
			${fullWidth && "w-full"}
		 `}
		>
			{children}
			{icon && <img src={icon} alt="arrow-right" className="ml-2 rounded-full w-5 h-5" />}
		</button>
	)
}

export default Button
