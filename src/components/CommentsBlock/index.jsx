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
import styles from './CommentsBlock.module.scss'

import React from "react";

function CommentsBlock({items, children, isPostLoading}) {
  
  return (
    <Paper>
      <Typography classes={{root: styles.title}} variant="h6" align="center">
        Comments
      </Typography>
      <List>
        {(isPostLoading ? [...Array(5)] : items).map((obj, index) => (
          <React.Fragment key={index}>
            <ListItem>
              <ListItemAvatar>
                {isPostLoading ? (
                  <Skeleton variant="circular" width={40} height={40} />
                ) : (
                  <Avatar src='https://ogorodniku.com/uploads/posts/2023-01/1674192794_ogorodniku-com-p-peizazhi-prirodi-foto-1.jpg'/>
                )}
              </ListItemAvatar>
              {isPostLoading ? (
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
      {children}
    </Paper>
  );
}

export default CommentsBlock;
