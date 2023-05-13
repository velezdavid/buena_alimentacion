import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const FeaturedRecipe = ({ recipe }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/recipe?id=${recipe?.id}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1, height: "17rem" }}>
            <Typography component="h2" variant="h5">
              {recipe?.title}
            </Typography>
            {(recipe?.dairyFree ||
              recipe?.glutenFree ||
              recipe?.veryHealthy) && (
              <div
                style={{
                  display: "flex",
                  gap: "1rem",
                  background: "#f7f7f7",
                  borderRadius: "8px",
                  fontSize: "0.8rem",
                  padding: "0.5rem",
                  fontWeight: "600",
                }}
              >
                {recipe?.dairyFree && (
                  <span style={{ color: "#0ea674" }}>Dairy Free</span>
                )}
                {recipe?.glutenFree && (
                  <span style={{ color: "#e9aa43" }}>Gluten Free</span>
                )}
                {recipe?.veryHealthy && (
                  <span style={{ color: "#bc4e27" }}>Very Healthy</span>
                )}
              </div>
            )}
            <Typography
              variant="subtitle1"
              paragraph
              dangerouslySetInnerHTML={{ __html: recipe.summary }}
              sx={{
                textOverflow: "ellipsis",
                overflow: "hidden",
                height: "7rem",
              }}
            />
            <Typography variant="subtitle1" color="primary">
              To prepare...
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 160,
              height: "17rem",
              display: { xs: "none", sm: "block" },
            }}
            image={recipe.image || recipe.sourceUrl}
            alt={recipe.creditsText}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
};

FeaturedRecipe.propTypes = {
  recipe: PropTypes.object,
};
