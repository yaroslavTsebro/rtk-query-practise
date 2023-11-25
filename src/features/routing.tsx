import { createBrowserRouter, Navigate } from "react-router-dom";
import PostsList from "./Post/PostsList/PostsList";
import UsersList from "./User/UserList/UsersList";
import UserPage from "./User/UserPage/UserPage";
import RootLayout from "./layout/RootLayout/RootLayout";
import AddPostForm from "./Post/AddPostForm/AddPostForm";
import SinglePostPage from "./Post/SinglePostPage/SinglePostPage";
import EditPostForm from "./Post/EditPostForm/EditPostForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <PostsList />,
      },
      {
        path: "posts",
        children: [
          { index: true, element: <AddPostForm /> },
          { path: ":postId", element: <SinglePostPage /> },
          { path: "edit/:postId", element: <EditPostForm /> }
        ],
      },
      {
        path: "users",
        children: [
          { index: true, element: <UsersList /> },
          { path: ":userId", element: <UserPage /> }
        ],
      },
    ],
  },
  // Catch all route for 404 or redirection
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

