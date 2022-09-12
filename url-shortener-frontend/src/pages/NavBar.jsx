import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import AppIcon from "../../public/vite.svg";

function NavBar() {
  return (
    <AppBar position="fixed" color="primary">
      <Container maxWidth="xl">
        <Toolbar>
          <img
            src={AppIcon}
            alt="S"
            height="30px"
            style={{ marginRight: "10px" }}
          />
          <Typography
            variant="h6"
            noWrap
            sx={{
              display: { xs: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SHORTEN.NOW
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
