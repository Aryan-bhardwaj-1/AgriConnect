function Button({ children, className = "", type = "button", ...props }) {
	return (
		<button
			type={type}
			className={`primary-btn ${className}`.trim()}
			{...props}
		>
			{children}
		</button>
	);
}

export default Button;
