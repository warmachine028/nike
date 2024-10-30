/** @format */
import { useNavigate } from 'react-router-dom';
import './Button.scss';

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
      id="🔥Button"
      onClick={handleRedirect}
      className={`${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor} --backgroundColorTrue` : '--backgroundColorFalse'} ${fullWidth && '--fullWidthTrue'} `}
    >
      <span id="🔥Button__Span">{children}</span>
      {icon && <img id="🔥Button__Span__Img" src={icon} alt="arrow-right" />}
    </button>
  );
};

export default Button;
