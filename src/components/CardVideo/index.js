import React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export const CardVideo = ({ post }) => {
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea
        component="a"
        href={`https://www.youtube.com/watch?v=${post.youTubeId}`}
        target="_blank"
      >
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.shortTitle}
            </Typography>
            <CardMedia
              component="img"
              sx={{
                width: "100%",
                height: 200,
                display: { xs: "none", sm: "block", marginTop: "8px" },
              }}
              image={post.thumbnail}
              alt={post.shortTitle}
            />

            <p
              color="inherit"
              style={{
                color: "brown",
                fontSize: "1.5rem",
                fontFamily: "fangsong",
                float: "right",
                textDecoration: "none",
                p: 1,
                flexShrink: 0,
              }}
            >
              Ver video ▶️
            </p>
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
};

CardVideo.propTypes = {
  post: PropTypes.object,
};
