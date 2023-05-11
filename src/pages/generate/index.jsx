import React from "react";
import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import { CardRecipe } from "../../components/CardRecipe";

export const Generate = () => {
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
        Generate Meal Plan
      </Typography>
      <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
        Generate a meal plan with three meals per day (breakfast, lunch, and
        dinner).
      </p>
      <Divider />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginTop: "1rem",
        }}
      >
        <p>Click to generate meal plan</p>
        <Button variant="contained">One Day</Button>
        <Button variant="contained">One Week</Button>
      </div>
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
        {resultRecipes.map((recipe) => (
          <CardRecipe key={recipe.title} post={recipe} />
        ))}
      </Grid>
    </Grid>
  );
};
