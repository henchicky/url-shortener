import { ToastContainer } from "react-toastify";
import Home from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import axios from "axios";
function App() {
  let location = useLocation();
  let navigate = useNavigate();

  const jsonConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  function Redirect() {
    axios
      .post(
        "http://localhost:62762/url/getFullUrl",
        location.pathname.substring(1),
        jsonConfig
      )
      .then((res) => {
        console.log(res.data);
        let urlPath = res.data;
        if (!urlPath.match(/^https?:\/\//i)) {
          urlPath = "http://" + urlPath;
        }
        window.location.replace(urlPath);
        return null;
      })
      .catch((err) => {
        console.error(err);
        navigate("/404");
        return <PageNotFound />;
      });
  }

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="404" element={<PageNotFound />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        closeOnClick
        pauseOnFocusLoss
      />
      <ToastContainer />
    </>
  );
}

export default App;
