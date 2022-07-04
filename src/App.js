import { useState } from "react";
import PostsList from "./components/PostsList";
import "./styles/App.css";

function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: "JavaScript", body: "Description" },
		{ id: 2, title: "JavaScript 2", body: "Description" },
		{ id: 3, title: "JavaScript 3", body: "Description" },
	]);

	const [posts2, setPosts2] = useState([
		{ id: 1, title: "Python", body: "Description" },
		{ id: 2, title: "Python 2", body: "Description" },
		{ id: 3, title: "Python 3", body: "Description" },
	]);

	return (
		<div className="App">
			<PostsList posts={posts} title="JavaScript posts" />
			<PostsList posts={posts2} title="Python posts" />
		</div>
	);
}

export default App;
