import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TagIcon from "@mui/icons-material/Tag";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import no_tags from "../../assets/no_tags.png";

import React from "react";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import NoData from "../NoData";

function TagsBlock({ items }) {
  const [isLoading, changeLoading] = React.useState(false);

  return (
    <Paper style={{ marginBottom: "10px" }}>
      <Typography variant="h6" align="center">
        Tags
      </Typography>
      <List>
        {(isLoading ? [...Array(5)] : items).map((title, index) => (
          <Link style={{ textDecoration: "none", color: "black" }}>
            <ListItem key={index}>
              <ListItemButton>
                <ListItemIcon>
                  <TagIcon />
                </ListItemIcon>
                {isLoading ? (
                  <Skeleton width={1000} />
                ) : (
                  <ListItemText primary={title} />
                )}
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        {!isLoading && items.length === 0 && (
          <NoData image={no_tags} title="There are no tags" text="" />
        )}
      </List>
    </Paper>
  );
}

export default TagsBlock;
