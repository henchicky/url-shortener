import {
  Button,
  Card,
  Grid,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function shortenUrl() {
    if (!isValidUrl(url)) alert("Invalid url");

    setDisabled(true);
    setUrl("www.short.com");
    // axios.post("");
  }

  function copy() {}

  function newUrl() {
    setDisabled(false);
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
              <FormControl disabled={disabled}>
                <OutlinedInput
                  value={url}
                  onChange={handleChange}
                  endAdornment={
                    disabled && <Button variant="outlined">Copy</Button>
                  }
                  placeholder="Enter your url here"
                  sx={{ my: 2 }}
                />
                {!disabled ? (
                  <Button onClick={shortenUrl} variant="contained">
                    Shorten URl
                  </Button>
                ) : (
                  <>
                    <Button onClick={copy} variant="outlined">
                      Copy
                    </Button>
                    <Button onClick={newUrl} variant="contained">
                      Shorten another url
                    </Button>
                  </>
                )}
              </FormControl>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
