import { Button, Card, TextField, Grid } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState(null);
  const [disabled, setDisabled] = useState(false);

  function handleChange(e) {
    setUrl(e.target.value);
  }

  function submit() {
    setDisabled(true);
    setUrl("www.short.com");
    // axios.post("");
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
      <Grid item xs={3}>
        <Box m="auto">
          <Card>
            <TextField
              placeholder="Enter your url here"
              value={url || ""}
              onChange={handleChange}
              disabled={disabled}
            />
            <Button onClick={submit}>Shorten URl</Button>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
