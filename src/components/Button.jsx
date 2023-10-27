/** @format */
import { useNavigate } from 'react-router-dom';

const Button = ({ children, backgroundColor, borderColor, textColor, fullWidth, icon }) => {
  const history = useNavigate();

  const handleRedirect = () => {
    switch (children) {
      case 'Shop now':
        console.log(children);
        break;
      case 'View Details':
        history('/shoe_details');
        console.log(children);
        break;
      case 'Learn More':
        console.log(children);
        break;
      case 'Sign up':
        console.log(children);
        break;
      default:
      // code block
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className={`hover:text-white flex justify-center items-center gap-2 px-6 py-3 border font-montserrat text-lg leading-none rounded-full focus:outline-none transform transition-transform hover:scale-105 hover:shadow-md
        ${
          backgroundColor
            ? `${backgroundColor} ${borderColor} ${textColor}  hover:bg-slate-gray hover:border-transparent hover:shadow-lg ease-in-out duration-300  dark:text-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-900 dark:hover:border-gray-100 dark:transition`
            : 'bg-coral-red border-coral-red text-white hover:text-coral-red hover:border-transparent hover:shadow-lg ease-in-out duration-300 dark:text-gray-100 dark:hover:border-gray-100'
        }
        ${fullWidth && 'w-full'}
      `}
    >
      <span className="truncate">{children}</span>
      {icon && (
        <img
          src={icon}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5 transform transition-transform hover:translate-x-1 hover:scale-110"
        />
      )}
    </button>
  );
};

export default Button;
