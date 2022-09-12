import { Typography, Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "./NavBar";
import NotFoundImg from "../asset/404.png";

function PageNotFound() {
  return (
    <>
      <NavBar />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <img src={NotFoundImg} alt="404-not-found" width="80%" />
          <Typography variant="h6">Opps! Page not found.</Typography>
          <Link underline="none" href="/">
            Click here to go back to main page.
          </Link>
        </Container>
      </Box>
    </>
  );
}

export default PageNotFound;
