import { Link, useParams } from "react-router-dom";
import { useGetUsersQuery } from "../../../app/service/users";
import { useGetPostsByUserIdQuery } from "../../../app/service/posts";

const UserPage = () => {
  const { userId } = useParams();

  const {
    data: users,
    isLoading: isLoadingUser,
    isSuccess: isSuccessUser,
    isError: isErrorUser,
    error: errorUser,
  } = useGetUsersQuery();

  const {
    data: postsForUser,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsByUserIdQuery(Number(userId));

  
  const author = users?.find(user => user.id === Number(userId));

  let content;
  if (isLoading || isLoadingUser) {
    content = <p>Loading...</p>;
  } else if (isSuccess && isSuccessUser) {
    const posts = postsForUser;
    content = (
      <section>
        <h2>{author?.name}</h2>
        <ol>
          {posts.map((post) => (
            <li key={post.id}>
              <Link to={`/post/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ol>
      </section>
    );
  } else if (isError || isErrorUser) {
    content = <p>Error</p>;
  }

  return content;
};

export default UserPage;
