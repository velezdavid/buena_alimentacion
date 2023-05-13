import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { generateMealplanner } from "../../services/recipes.service";

export const Generate = () => {
  const [resultRecipes, setResultRecipes] = useState([]);
  const [resultNutrients, setResultNutrients] = useState({});
  useEffect(() => {
    getMealplanner(false);
  }, []);

  const getMealplanner = async (button = false) => {
    let response = null;

    if (button) {
      response = await generateMealplanner("day");
    } else {
      const resultRecipesData = localStorage.getItem("resultRecipes");
      const resultNutrientsData = localStorage.getItem("resultNutrients");

      if (resultRecipesData && resultNutrientsData) {
        setResultRecipes(JSON.parse(resultRecipesData));
        setResultNutrients(JSON.parse(resultNutrientsData));
        return;
      }

      response = await generateMealplanner("day");
    }

    setResultRecipes(response?.meals || []);
    setResultNutrients(response?.nutrients || {});
    localStorage.setItem("resultRecipes", JSON.stringify(response?.meals));
    localStorage.setItem(
      "resultNutrients",
      JSON.stringify(response?.nutrients)
    );
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
        <Button
          variant="contained"
          onClick={() => {
            getMealplanner(true);
          }}
        >
          One Day
        </Button>
      </div>
      <Grid
        item
        xs={12}
        md={8}
        style={{ marginTop: "1rem", marginBottom: "1rem" }}
      ></Grid>
      <h1 style={{ fontSize: "2rem" }}>Daily recipes</h1>
      <div>
        {Object.keys(resultNutrients).length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <div className="">
              <strong>Calories: </strong>
              {`${resultNutrients?.calories}`}
            </div>
            <div className="">
              <strong>Protein: </strong>
              {`${resultNutrients?.protein}`}
            </div>
            <div className="">
              <strong>Carbohydrates: </strong>
              {`${resultNutrients?.carbohydrates}`}
            </div>
          </div>
        )}
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {resultRecipes?.map((recipe) => (
            <div key={recipe?.id} style={{ width: "33%", padding: "8px" }}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={recipe?.urlImage}
                  title={recipe?.title}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ height: 120 }}
                  >
                    {recipe.title}
                  </Typography>
                </CardContent>
                <CardActions sx={{ float: "right" }}>
                  <Button size="small" href={`/recipe?id=${recipe?.id}`}>
                    More
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Grid>
  );
};
