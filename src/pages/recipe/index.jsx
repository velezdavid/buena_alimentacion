import { Divider, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MainFeaturedPost } from "../../components/MainFeaturedPost";
import { Sidebar } from "../../components/Sidebar";

import {
  getImgRecipe,
  getRecipeDetail,
  getRecipeSimilar,
} from "../../services/recipes.service";
import { useLocation } from "react-router-dom";
export const Recipe = () => {
  const [detailRecipe, setDetailRecipe] = useState({});
  const [similiarRecipes, setSimiliarRecipes] = useState([]);
  const [urlImgIngredient, setUrlImgIngredient] = useState("");
  const [urlNutritionLabel, setNutritionLabel] = useState("");
  const [priceBreakdownWidget, setPriceBreakdownWidget] = useState("");
  const query = new URLSearchParams(useLocation().search);

  useEffect(() => {
    const recipeId = query?.get("id");
    getDetail(recipeId);
    getSimilar(recipeId);
    getImgURL(recipeId);
  }, []);

  const getDetail = async (id) => {
    const response = await getRecipeDetail(id);
    setDetailRecipe(response?.data);
  };

  const getSimilar = async (id) => {
    const response = await getRecipeSimilar(id);
    setSimiliarRecipes(response?.data);
  };
  const getImgURL = async (id) => {
    const respIngredients = await getImgRecipe(id, "card");
    const respNutritionLabel = await getImgRecipe(id, "nutritionLabel");
    const respPriceBreakdownWidget = await getImgRecipe(
      id,
      "priceBreakdownWidget",
      2
    );

    setUrlImgIngredient(respIngredients?.data?.url);
    setNutritionLabel(respNutritionLabel?.data);
    setPriceBreakdownWidget(respPriceBreakdownWidget.data);
  };

  return (
    <>
      <MainFeaturedPost post={detailRecipe} />

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
          <Typography variant="h4" gutterBottom>
            {detailRecipe.title}
          </Typography>

          <div
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
            dangerouslySetInnerHTML={{ __html: detailRecipe.summary }}
          />
          <p style={{ textAlign: "right" }}>
            <a
              href={detailRecipe.sourceUrl}
              rel="noreferrer"
              target="_blank"
              style={{ color: "blue", fontWeight: 600 }}
            >
              Steps to follow for the preparation...
            </a>
          </p>
          <Divider />
          <img src={urlImgIngredient} alt="ingredients" />

          <Divider />
        </Grid>{" "}
        <Sidebar
          title="Similar Recipes 🥗"
          titleCategory=""
          description="Find recipes which are similar to the given one."
          archives={similiarRecipes}
          showFacts={true}
          fact={urlNutritionLabel}
          priceBreakdownWidget={priceBreakdownWidget}
        />
      </Grid>
    </>
  );
};
