const Button = ({ children, icon, backgroundColor, textColor, borderColor, fullWidth }) => {
	return (
		<button
			className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
				backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : "bg-coral-red  border-coral-red text-white"
			}
			${fullWidth && 'w-full'}
		 `}
		>
			{children}
			{icon && <img src={icon} alt="arrow-right" className="ml-2 rounded-full w-5 h-5" />}
		</button>
	)
}

export default Button
