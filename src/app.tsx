import { Box, Container } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useMemo } from "react";
import { RelayEnvironmentProvider } from "react-relay/hooks";

import Repositories from "./features/repositories/repositories";
import RelayEnvironment from "./relay-environment";

const App = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <RelayEnvironmentProvider environment={RelayEnvironment}>
        <Container component={Box} p={2}>
          <Repositories />
        </Container>
      </RelayEnvironmentProvider>
    </ThemeProvider>
  );
};

export default App;
