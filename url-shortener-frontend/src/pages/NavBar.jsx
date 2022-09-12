import { AppBar, Toolbar, Typography, Container } from "@mui/material";

function NavBar() {
  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            shorten.now
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default NavBar;
