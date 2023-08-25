const Button = ({
  children,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth,
  icon,
}) => {
  const styles = `
    .button {
      background-color: "coral-red";
      border-color: "coral-red";
      color: "white";
    }

    .button:hover {
      background-color: #ffff;
      border-color: #FF6452;
      color: #FF6452;

    }
  `;
  return (
    <>
      <button
        className={`flex button ${
          styles.className
        } justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full ${
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
      <style>{styles}</style>
    </>
  );
};

export default Button;
