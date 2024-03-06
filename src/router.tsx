import { Navigate, createHashRouter } from "react-router-dom";

import Calculator from "./pages/calculator";
import AboutZakat from "./pages/about-zakat";

const router = createHashRouter([
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
