import {
  Button,
  Divider,
  Grid,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { CardRecipe } from "../../components/CardRecipe";
import { MainFeaturedPost } from "../../components/MainFeaturedPost";
import { Sidebar } from "../../components/Sidebar";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  getRecipesByIndredients,
  getRecipesRandom,
} from "../../services/recipes.service";
import { FeaturedRecipe } from "../../components/FeaturedRecipe";
import { mainFeaturedRecipe } from "../../utils/static";

export const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [ingredients, setIngredients] = useState("");
  const [start, setStart] = useState(2);
  const [end, setEnd] = useState(6);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await getRecipesRandom(36);
    if (response?.status === 200) {
      setRecipes(response?.data?.recipes);
    }
  };

  const searchRecipes = async () => {
    if (ingredients) {
      const response = await getRecipesByIndredients(36, ingredients);
      if (response?.status === 200) {
        setRecipes(response?.data);
      }
    } else {
      const response = await getRecipesRandom(36);
      if (response?.status === 200) {
        setRecipes(response?.data?.recipes);
      }
    }
  };

  const handleIngredients = (event) => {
    setIngredients(event.target.value);
  };

  const previous = () => {
    if (start >= 4) {
      setStart(start - 4);
      setEnd(end - 4);
      setPage(page - 1);
    }
  };
  const next = () => {
    if (end <= 36) {
      setStart(start + 4);
      setEnd(end + 4);
      setPage(page + 1);
    }
  };

  const sidebar = {
    title: "Categories",
    titleCategory: "Explore these categories",
    description: "The type of recipe. See a full list of supported meal types.",
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

  return (
    <>
      <MainFeaturedPost post={mainFeaturedRecipe} />
      <Grid container spacing={4}>
        {recipes?.slice(0, 2)?.map((recipe) => (
          <FeaturedRecipe key={recipe.id} recipe={recipe} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }} id="body">
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
          <Divider /> <Divider />
          {/* body */}
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={8}>
              <TextField
                id="filled-basic"
                label="Ingredients"
                variant="filled"
                style={{ width: "100%" }}
                value={ingredients}
                onChange={handleIngredients}
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
            {recipes?.slice(start, end)?.map((recipe) => (
              <CardRecipe key={recipe.title} recipe={recipe} />
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
            <ToggleButton value="web" onClick={previous}>
              Previous
            </ToggleButton>
            <ToggleButton value="android" disabled>
              {page}
            </ToggleButton>
            <ToggleButton value="ios" onClick={next}>
              Next
            </ToggleButton>
          </ToggleButtonGroup>{" "}
        </Grid>{" "}
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
          setRecipes={setRecipes}
        />
      </Grid>
    </>
  );
};
