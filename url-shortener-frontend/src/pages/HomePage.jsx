import {
  Button,
  Card,
  Grid,
  CardContent,
  FormControl,
  OutlinedInput,
  Typography,
  CircularProgress,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { lightBlue } from "@mui/material/colors";

function Home() {
  const [url, setUrl] = useState(null);
  const [newRequest, setNewRequest] = useState(true);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  const jsonConfig = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  function shortenUrl() {
    toast.promise(
      axios.post("http://localhost:62762/url/shortenUrl", url, jsonConfig),
      {
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
            return "Invalid Url. Please try again.";
          },
        },
      }
    );
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
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh", backgroundColor: lightBlue }}
      >
        <Grid item xs={5}>
          <Box mx="auto">
            <Card>
              <CardContent>
                <Typography align="center" variant="h4">
                  Shorten Now
                </Typography>
                <FormControl disabled={!newRequest}>
                  <OutlinedInput
                    value={url || ""}
                    onChange={handleChange}
                    endAdornment={
                      !newRequest && (
                        <Button variant="outlined" onClick={copyToClipboard}>
                          Copy
                        </Button>
                      )
                    }
                    placeholder="Enter your url here"
                    sx={{ my: 2 }}
                  />
                  {newRequest ? (
                    <Button
                      onClick={shortenUrl}
                      variant="contained"
                      disabled={!url}
                    >
                      {loading ? <CircularProgress /> : "Shorten URl"}
                    </Button>
                  ) : (
                    <Button onClick={handleNewRequest} variant="contained">
                      Shorten another url
                    </Button>
                  )}
                </FormControl>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
