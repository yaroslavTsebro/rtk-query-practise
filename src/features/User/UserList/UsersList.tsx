import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../../app/service/users";

const UsersList = () => {
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery();

  let content;
  if (isLoading) {
    content = <p>"Loading..."</p>;
  } else if (isSuccess) {
    const renderedUsers = users.map((user) => (
      <li key={user.id}>
        <Link to={`/user/${user.id}`}>{user.name}</Link>
      </li>
    ));

    content = (
      <section>
        <h2>Users</h2>

        <ul>{renderedUsers}</ul>
      </section>
    );
  } else if (isError) {
    content = <p>{JSON.stringify(error)}</p>;
  }

  return content;
};

export default UsersList;
