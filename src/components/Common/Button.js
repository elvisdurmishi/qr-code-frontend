const Button = ({icon, text = "Button", color}) => (
    <div className={`button bg-lightblue`}>
        {icon}
        <span>
            {text}
        </span>
    </div>
)

export default Button;