import {
  Button,
  Card,
  TextField,
  Grid,
  CardContent,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
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

  function copy() {}

  function newUrl() {
    setDisabled(false);
    setUrl(null);
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
            <CardContent>
              <TextField
                placeholder="Enter your url here"
                value={url || ""}
                onChange={handleChange}
                disabled={disabled}
              />
              <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={values.showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange("password")}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        <ContentCopyIcon />
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
              {!disabled ? (
                <Button onClick={submit}>Shorten URl</Button>
              ) : (
                <>
                  <Button onClick={copy}>Copy</Button>
                  <Button onClick={newUrl}>Shorten another url</Button>
                </>
              )}
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
