import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../../app/service/users";

const PostAuthor: React.FC<{ userId: number }> = ({ userId }) => {
  const { data: users, isLoading, isError } = useGetUsersQuery();

  const author = users?.find(user => user.id === userId);

  if (isLoading) return <span>Loading...</span>;
  if (isError || !author) return <span>Unknown author</span>;

  return <span>by <Link to={`/user/${userId}`}>{author.name}</Link></span>;
};

export default PostAuthor;