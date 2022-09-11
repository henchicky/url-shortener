import {
  Button,
  Card,
  Grid,
  CardContent,
  FormControl,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import copy from "copy-to-clipboard";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  const [newRequest, setNewRequest] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function shortenUrl() {
    toast.promise(
      axios.post("http://localhost:62762/url/fullPath", {
        url,
      }),
      {
        pending: {
          render() {
            setNewRequest(false);
            setLoading(true);
            return "Shortening...";
          },
        },
        success: {
          render(res) {
            setNewRequest(true);
            setUrl(res.data.data);
            return "Shortened successfully";
          },
        },
        error: {
          render() {
            return "Invalid Url. Please try again.";
          },
        },
      }
    );
  }

  function copyToClipboard() {
    copy(url);
  }

  function newUrl() {
    setSubmitStatus(false);
    setUrl(null);
  }

  function isValidUrl(url) {
    try {
      url = new URL(url);
    } catch (_) {
      return false;
    }
    return url.protocol === "http:" || url.protocol === "https:";
  }

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={5}>
          <Box mx="auto">
            <Card>
              <CardContent>
                <Typography align="center" variant="h4">
                  Shorten Now
                </Typography>
                <FormControl disabled={newRequest}>
                  <OutlinedInput
                    value={url || ""}
                    onChange={handleChange}
                    endAdornment={
                      newRequest && (
                        <Button variant="outlined" onClick={copyToClipboard}>
                          Copy
                        </Button>
                      )
                    }
                    placeholder="Enter your url here"
                    sx={{ my: 2 }}
                  />
                  {newRequest ? (
                    <Button onClick={newUrl} variant="contained">
                      Shorten another url
                    </Button>
                  ) : (
                    <Button
                      onClick={shortenUrl}
                      variant="contained"
                      disabled={!url}
                    >
                      Shorten URl
                    </Button>
                  )}
                </FormControl>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </>
  );
}

export default App;
