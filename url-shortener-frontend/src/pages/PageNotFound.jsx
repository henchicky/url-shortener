import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function PageNotFound() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/home");
  }

  return (
    <>
      404 Page not found.
      <Typography onClick={handleClick}>
        Click here to go back to main page.
      </Typography>
    </>
  );
}

export default PageNotFound;
