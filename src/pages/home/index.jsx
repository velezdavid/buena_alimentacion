import {
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React from "react";
import { CardRecipe } from "../../components/CardRecipe";
import { MainFeaturedPost } from "../../components/MainFeaturedPost";
import { FeaturedPost } from "../../components/FeaturedPost";
import { Sidebar } from "../../components/Sidebar";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export const Home = () => {
  const mainFeaturedPost = {
    title: "A healthy life starts with food",
    description: "healthy recipes to stay healthy, eat better, live better",
    image: "https://source.unsplash.com/random/?food-fitness/",
    imageText: "main image description",
  };

  const featuredPosts = [
    {
      title: "Recipe 1",
      date: "Nov 12",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?noodles/",
      imageLabel: "Image Text",
    },
    {
      title: "Recipe 2",
      date: "Nov 11",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea dictumst. Aliquam id felis ut velit laoreet tincidunt. Sed quis aliquam lacus, a finibus ante.",
      image: "https://source.unsplash.com/random/?salads/",
      imageLabel: "Image Text",
    },
  ];

  const sidebar = {
    title: "Categories",
    titleCategory: "Explore these categories",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae libero eget nisl ullamcorper feugiat. Proin sit amet ex quam. In hac habitasse platea",
    archives: [
      { title: "➡️ Main course", value: "main course", url: "#" },
      { title: "➡️ Side dish", value: "side dish", url: "#" },
      { title: "➡️ Dessert", value: "dessert", url: "#" },
      { title: "➡️ Appetizer", value: "appetizer", url: "#" },
      { title: "➡️ Salad", value: "salad", url: "#" },
      { title: "➡️ Bread", value: "bread", url: "#" },
      { title: "➡️ Breakfast", value: "breakfast", url: "#" },
      { title: "➡️ Soup", value: "soup", url: "#" },
      { title: "➡️ Beverage", value: "beverage", url: "#" },
      { title: "➡️ Sauce", value: "sauce", url: "#" },
      { title: "➡️ Marinade", value: "marinade", url: "#" },
      { title: "➡️ Fingerfood", value: "fingerfood", url: "#" },
      { title: "➡️ Snack", value: "snack", url: "#" },
      { title: "➡️ Drink", value: "drink", url: "#" },
    ],

    social: [
      { name: "GitHub", icon: GitHubIcon },
      { name: "Twitter", icon: TwitterIcon },
      { name: "Facebook", icon: FacebookIcon },
    ],
  };

  const recipes = [
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
    <>
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {featuredPosts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
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
          {" "}
          <Typography variant="h6" gutterBottom>
            Search Recipes by Ingredients 🥗
          </Typography>
          <p style={{ marginTop: "1rem", marginBottom: "1rem" }}>
            Ever wondered what recipes you can cook with the ingredients you
            have in your fridge or pantry? This endpoint lets you find recipes
            that either maximize the usage of ingredients you have at hand (pre
            shopping) or minimize the ingredients that you don't currently have
            (post shopping).
          </p>
          <Divider />
          <Divider />
          {/* body */}
          <Grid
            item
            xs={12}
            md={8}
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          >
            <TextField
              id="filled-basic"
              label="Ingredients"
              variant="filled"
              style={{ width: "100%" }}
            />
            {/* <Button
          variant="outlined"
          size="large"
          style={{ float: "right", marginTop: "0.5rem" }}
        >
          Search recipes
        </Button> */}
          </Grid>
          <Grid container spacing={4}>
            {recipes.map((recipe) => (
              <CardRecipe key={recipe.title} post={recipe} />
            ))}
          </Grid>
          <Divider />
          <ToggleButtonGroup
            color="primary"
            value={1}
            exclusive
            onChange={() => {}}
            aria-label="Platform"
            style={{ float: "right", marginTop: "0.5rem" }}
          >
            <ToggleButton
              value="web"
              onClick={() => {
                console.log("Previous");
              }}
            >
              Previous
            </ToggleButton>
            <ToggleButton value="android" disabled>
              1
            </ToggleButton>
            <ToggleButton
              value="ios"
              onClick={() => {
                console.log("Previous");
              }}
            >
              Next
            </ToggleButton>
          </ToggleButtonGroup>{" "}
        </Grid>{" "}
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </>
  );
};
