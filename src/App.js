import PostItem from "./components/PostItem";
import "./styles/App.css";

function App() {
	return (
		<div className="App">
			<PostItem post={{ id: 1, title: "JavaScript", body: "Description" }} />
		</div>
	);
}

export default App;
