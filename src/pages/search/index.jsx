import React, { useEffect, useState } from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { CardVideo } from "../../components/CardVideo";
import { getRecipesVideo } from "../../services/recipes.service";

export const Search = () => {
  const [resultRecipes, setResultRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const videos = localStorage.getItem("videos");
    if (!videos) {
      const response = await getRecipesVideo();
      setResultRecipes(response?.data?.videos || []);
      localStorage.setItem("videos", JSON.stringify(response?.data?.videos));
    } else {
      setResultRecipes(JSON.parse(videos));
    }
  };

  const searchRecipes = async () => {
    if (search) {
      const response = await getRecipesVideo(search);
      if (response?.status === 200) {
        setResultRecipes(response?.data?.videos);
        localStorage.setItem("videos", JSON.stringify(response?.data?.videos));
      }
    }
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Search Food Videos
      </Typography>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        Find recipe and other food related videos. This endpoint searches
        YouTube for relevant recipe or other food-related videos.
      </p>
      <Divider />

      <Grid
        item
        xs={12}
        md={8}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      ></Grid>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} md={8}>
          <TextField
            id="filled-basic"
            label="Ingredients"
            variant="filled"
            style={{ width: "100%" }}
            value={search}
            onChange={handleSearch}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="outlined"
            size="large"
            style={{ float: "right", marginTop: "0.5rem" }}
            onClick={searchRecipes}
          >
            Search recipes
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        {resultRecipes.map((video) => (
          <CardVideo key={video.shortTitle} post={video} />
        ))}
      </Grid>
      <Divider />
    </Grid>
  );
};
