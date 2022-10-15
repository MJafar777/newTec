import Layoute from "./utils/layouts/layouts";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme/theme";
import "antd/dist/antd.css";
import Route from "./routes/routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layoute>
          <Route />
        </Layoute>
      </Router>
    </ThemeProvider>
  );
};

export default App;
