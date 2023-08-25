const Button = ({
  children,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  icon,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:bg-white hover:text-coral-red hover:border-coral-red ${
        backgroundColor
          ? `${backgroundColor} ${borderColor} ${textColor}`
          : "bg-coral-red  border-coral-red text-white"
      }
			${fullWidth && "w-full"}
		 `}
    >
      {children}
      {icon && (
        <img
          src={icon}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
};

export default Button;
