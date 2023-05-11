import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";

export const Header = ({ sections = [] }) => {
  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <div style={{ width: "100%" }}>
          <img
            src="https://img.freepik.com/premium-vector/healthy-food-logo_476121-95.jpg?w=2000"
            alt="logo"
            style={{ height: "140px", margin: "auto" }}
          />
        </div>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{
          justifyContent: "100%",
          overflowX: "auto",
          gap: 4,
          textDecoration: "underline",
        }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
};

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
