import { useState } from "react";

function App() {
	const [likes, setLikes] = useState(0);

	return (
		<div className="App">
			<h1>{likes}</h1>
			<button onClick={() => setLikes(likes + 1)}>Increment</button>
			<button onClick={() => setLikes(likes - 1)}>Decrement</button>
		</div>
	);
}

export default App;
