import { RouterProvider } from "react-router-dom";
import { router } from "./features/routing";

function App() {
  return <RouterProvider router={router} />
}

export default App;
