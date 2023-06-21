import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
} from "react-router-dom";
import "./App.scss";
import "./pages.scss";
import Home from "./Pages/home";
import Register from "./Pages/register";
import Login from "./Pages/login";
import Single from "./Pages/single";
import Write from "./Pages/write";
import Layout from "./Components/layout";

function App() {
  return (
    <>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/post/:id" element={<Single />} />
              <Route path="/write" element={<Write />} />
            </Route>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
