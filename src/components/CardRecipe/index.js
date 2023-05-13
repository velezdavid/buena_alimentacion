import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const CardRecipe = ({ recipe }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href={`/recipe?id=${recipe?.id}`}>
        <Card sx={{ display: "flex" }}>
          <CardContent
            sx={{ flex: 1, height: recipe?.summary ? "30rem" : "20rem" }}
          >
            <Typography component="h2" variant="h5">
              {recipe?.title}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: 200,
                display: { xs: "none", sm: "block" },
              }}
              image={recipe?.image}
              alt={recipe?.creditsText}
            />
            {recipe?.summary && (
              <Typography
                variant="subtitle1"
                paragraph
                dangerouslySetInnerHTML={{ __html: recipe?.summary }}
                sx={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  height: "7rem",
                }}
              />
            )}
            <Typography variant="subtitle1" color="primary">
              To prepare...
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

CardRecipe.propTypes = {
  recipe: PropTypes.object,
};
