const Button = ({ icon, text = "Button", color, onClick }) => (
  <div
    className={`button bg-lightblue`}
    onClick={() => {
      onClick();
    }}
  >
    {icon}
    <span>{text}</span>
  </div>
);

export default Button;
