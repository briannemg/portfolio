import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "resume", element: <Resume /> },
        { path: "contact", element: <Contact /> },
      ],
    },
  ],
  {
    basename: "/portfolio",
  }
);

export default router;
