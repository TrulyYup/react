function Message (props) {
	const span = { color: 'black' }
	return (
		<div className="message" style={{ color: 'lightblue' }}>
			<h1>Мой новый <span style={span}>{props.name}</span>!</h1>
			<p>{props.homework}</p>
		</div >
	);
}

export default Message
