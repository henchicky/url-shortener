import { ToastContainer } from "react-toastify";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Home from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AxiosService from "./services/AxiosService";

function App() {
  let location = useLocation();
  let navigate = useNavigate();

  function Redirect() {
    AxiosService.post("getFullUrl", location.pathname.substring(1))
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
    <div style={{ height: "100vh" }}>
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
    </div>
  );
}

export default App;
