import { Typography, Container, Link, Grid } from "@mui/material";
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
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              fontSize: "1.8rem",
            }}
          >
            404 Page Not Found
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "inherit",
              marginTop: "20px",
            }}
          >
            You should probably
          </Typography>
          <Link
            underline="none"
            href="/"
            variant="body1"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
            }}
          >
            go back to home page.
          </Link>
        </Container>
      </Box>
    </>
  );
}

export default PageNotFound;
