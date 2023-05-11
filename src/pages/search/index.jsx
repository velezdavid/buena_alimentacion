import React from "react";
import { Button, Divider, Grid, Typography } from "@mui/material";
import { CardRecipe } from "../../components/CardRecipe";
import { resultVideos } from "../../utils/static";
import { CardVideo } from "../../components/CardVideo";

export const Search = () => {
  const resultRecipes = [
    {
      title: "Recipe 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?fruit-food/",
      imageLabel: "Image Text",
    },
    {
      title: "Recipe 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?sandwich-food/",
      imageLabel: "Image Text",
    },
    {
      title: "Recipe 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?cheese-food/",
      imageLabel: "Image Text",
    },
    {
      title: "Recipe 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?meat-food/",
      imageLabel: "Image Text",
    },
  ];

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
      >
        {/* <Button
          variant="outlined"
          size="large"
          style={{ float: "right", marginTop: "0.5rem" }}
        >
          Search recipes
        </Button> */}
      </Grid>
      <Grid container spacing={4}>
        {resultVideos.map((video) => (
          <CardVideo key={video.shortTitle} post={video} />
        ))}
      </Grid>
    </Grid>
  );
};
