import { useState } from "react";

function App() {
	const [likes, setLikes] = useState(0);
	const [value, setValue] = useState("TEXT IN INPUT");

	function onChange(event) {
		console.log(event.target.value);
		setValue(event.target.value);
		console.log(event.target.value);
	}

	return (
		<div className="App">
			<h1>{likes}</h1>
			<h2>{value}</h2>
			<input type="text" value={value} onChange={onChange} />
			<button onClick={() => setLikes(likes + 1)}>Increment</button>
			<button onClick={() => setLikes(likes - 1)}>Decrement</button>
		</div>
	);
}

export default App;
