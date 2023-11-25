import { useGetPostsQuery } from "../../../app/service/posts";
import PostsExcerpt from "../PostExcerpt/PostExcerpt";

const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();
  console.log(posts)
  let content;
  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = posts.map((post) => <PostsExcerpt key={post.id} post={post} />);
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return <section>{content}</section>;
};
export default PostsList;
