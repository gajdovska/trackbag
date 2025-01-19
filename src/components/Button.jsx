function Button({ onClick, btnStyleType, children }) {
	return (
		<button
			onClick={onClick}
			className={`btn ${btnStyleType === "secondary" ? "btn--secondary" : ""}`}
		>
			{children}
		</button>
	);
}

export default Button;
