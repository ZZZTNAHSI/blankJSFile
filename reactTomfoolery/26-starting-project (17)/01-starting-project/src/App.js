import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import Root from "./pages/Root";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {index: true, element: <HomePage /> },
      {path: "products", element: <Products />,},
      {path: "products/:productId", element: <ProductDetail />}
    ]
  },

]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
