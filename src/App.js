import React from 'react';
import { Layout } from "./components"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { theme } from "./theme"
import { Switch, Route } from "react-router-dom"
import HomePage from './HomePage';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <CssBaseline />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Layout>
    </ThemeProvider>
  );
}

export default App;

