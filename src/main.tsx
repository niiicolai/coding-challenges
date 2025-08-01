import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import "./index.css";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)