import {
  ListItem,
  Typography,
  List,
  Avatar,
  Skeleton,
  ListItemAvatar,
  ListItemText
} from "@mui/material";
import Paper from "@mui/material/Paper";

import React from "react";

function CommentsBlock({ items }) {
  const [isLoading, changeLoading] = React.useState(true);
  return (
    <Paper>
      <Typography variant="h6" align="center">
        Comments
      </Typography>
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar src='https://ogorodniku.com/uploads/posts/2023-01/1674192794_ogorodniku-com-p-peizazhi-prirodi-foto-1.jpg'/>
                )}
              </ListItemAvatar>
              {isLoading ? (
                  <div style={{ display: "flex", flexDirection: "column" }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={19} width={230} />
                </div>
              ) : (
                <ListItemText primary='111' secondary='222222'/>
              )}
            </ListItem>
          </React.Fragment>
        ))}
      </List>
    </Paper>
  );
}

export default CommentsBlock;
