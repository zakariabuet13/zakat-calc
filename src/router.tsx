import { Navigate, createHashRouter } from "react-router-dom";

import Calculator from "./pages/calculator";
import Masala from "./pages/masala";

const router = createHashRouter([
  {
    path: '/',
    element: <Calculator/>,
  },
  {
    path: '/masala',
    element: <Masala/>,
  },
  {
    path: '*',
    element: <Navigate replace to="/" />
  }
]);

export default router;
