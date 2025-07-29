import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="resume" element={<Resume />} />
        <Route path="contact" element={<Contact />} />
        {/* Future routes like projects can go here too */}
      </Route>
    </Routes>
  );
};

export default App;
