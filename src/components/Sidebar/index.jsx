import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { fact } from "../../utils/static";
export const Sidebar = ({
  archives = [],
  description = "",
  title = "",
  titleCategory = "",
  showFacts = false,
}) => {
  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: "grey.200" }}>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>
      <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
        {titleCategory}
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}
      {showFacts && (
        <div
          style={{ marginTop: "1rem", marginBottom: "1rem" }}
          dangerouslySetInnerHTML={{ __html: fact }}
        />
      )}
      {showFacts && (
        <img
          src="https://api.spoonacular.com/recipes/1082038/priceBreakdownWidget.png?apiKey=ef0b6b6c52cb4e16bae0ffb65ff4c624&mode=2"
          alt="graphic"
          style={{ width: "100%" }}
        />
      )}
    </Grid>
  );
};

Sidebar.propTypes = {
  archives: PropTypes.object,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  titleCategory: PropTypes.string,
  showFacts: PropTypes.bool,
};
