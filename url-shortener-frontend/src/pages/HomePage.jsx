import {
  Button,
  FormControl,
  OutlinedInput,
  Typography,
  CircularProgress,
  Container,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import hommeImg from "../asset/home-background.gif";
import NavBar from "./NavBar";
import AxiosService from "../services/AxiosService";

function Home() {
  const [url, setUrl] = useState(null);
  const [newRequest, setNewRequest] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function shortenUrl() {
    toast.promise(AxiosService.post("shortenUrl", url), {
      pending: {
        render() {
          setNewRequest(true);
          setLoading(true);
          return "Shortening...";
        },
      },
      success: {
        render(res) {
          setNewRequest(false);
          setUrl(window.location.href + res.data.data);
          return "Shortened successfully";
        },
      },
      error: {
        render() {
          setLoading(false);
          return "Invalid Url. Please try again.";
        },
      },
    });
  }

  function copyToClipboard() {
    copy(url);
    toast.info("Copied to clipboard");
  }

  function handleNewRequest() {
    setNewRequest(true);
    setLoading(false);
    setUrl(null);
  }

  return (
    <>
      <NavBar />
      <Box sx={{ textAlign: "center" }}>
        <img src={hommeImg} alt="home-screen-image" />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          Just&nbsp;
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "primary.main",
          }}
        >
          Paste&nbsp;
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
          }}
        >
          Your URL or&nbsp;
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "primary.main",
          }}
        >
          Ctrl+V
        </Typography>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Container>
          <FormControl disabled={!newRequest} fullWidth>
            <OutlinedInput
              value={url || ""}
              onChange={handleChange}
              endAdornment={
                !newRequest && (
                  <Button
                    variant="outlined"
                    onClick={copyToClipboard}
                    size="small"
                  >
                    Copy
                  </Button>
                )
              }
              placeholder="www.example.com"
              sx={{ my: 2, py: 0.5 }}
              size="small"
              startAdornment={
                <InputAdornment position="start">#</InputAdornment>
              }
            />
            {newRequest ? (
              <Button
                onClick={shortenUrl}
                variant="contained"
                disabled={!url}
                size="small"
              >
                {loading ? <CircularProgress /> : "Shorten URl"}
              </Button>
            ) : (
              <Button
                onClick={handleNewRequest}
                variant="contained"
                size="small"
              >
                Shorten another url
              </Button>
            )}
          </FormControl>
        </Container>
      </Box>
    </>
  );
}

export default Home;
