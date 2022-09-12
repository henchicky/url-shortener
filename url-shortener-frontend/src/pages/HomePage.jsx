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
import { useHotkeys } from "react-hotkeys-hook";
import HommeImg from "../asset/home-background.gif";
import UrlIcon from "../asset/link-icon.png";
import NavBar from "./NavBar";
import AxiosService from "../services/AxiosService";

function Home() {
  const [url, setUrl] = useState(null);
  const [newRequest, setNewRequest] = useState(true);
  const [loading, setLoading] = useState(false);

  useHotkeys("ctrl+v, cmd+v", () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        console.log("Pasted content: ", text);
        setUrl(text);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  });

  useHotkeys("ctrl+c, cmd+c", () => copyToClipboard());

  useHotkeys("Enter", () => url && shortenUrl());

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
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <img src={HommeImg} alt="home-screen-image" width="80%" />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h5"
              sx={{
                fontFamily: "monospace",
                fontWeight: 700,
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
                color: "primary.main",
              }}
            >
              Ctrl+V
            </Typography>
          </Box>
          <Container size="md">
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
                  <InputAdornment position="start">
                    <img src={UrlIcon} alt="#" />
                  </InputAdornment>
                }
              />
              {newRequest ? (
                <Button
                  onClick={shortenUrl}
                  variant="contained"
                  disabled={!url || loading}
                  sx={{
                    height: "36.5px",
                  }}
                >
                  {loading ? <CircularProgress size={20} /> : "Shorten URl"}
                </Button>
              ) : (
                <Button onClick={handleNewRequest} variant="contained">
                  Shorten another url
                </Button>
              )}
            </FormControl>
          </Container>
        </Container>
      </Box>
    </>
  );
}

export default Home;
