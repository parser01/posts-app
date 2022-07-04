import PostItem from "./PostItem";

const PostsList = ({ posts, title }) => {
	return (
		<div>
			<h2 style={{ textAlign: "center" }}>{title}</h2>
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</div>
	);
};

export default PostsList;
