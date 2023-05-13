import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import { Generate } from "../pages/generate";
import { Search } from "../pages/search";
import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { sections } from "../utils/static";
import { Recipe } from "../pages/recipe";

export const Routing = () => {
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Healthy Food" sections={sections} />
        <main>
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/generate" element={<Generate />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/recipe" element={<Recipe />} />
            </Routes>
          </Router>
        </main>
      </Container>
      <Footer title="All rights reserved" description="" />
    </ThemeProvider>
  );
};
