import { Navigate, createBrowserRouter } from "react-router-dom";

import Calculator from "./pages/calculator";
import AboutZakat from "./pages/about-zakat";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Calculator/>,
  },
  {
    path: '/about-zakat',
    element: <AboutZakat/>,
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  }
]);

export default router;
