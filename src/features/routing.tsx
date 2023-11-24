import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: 
      }
    ]
  }
])