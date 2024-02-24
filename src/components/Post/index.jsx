import SkeletonBlock from "./SkeletonBlock";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

import React from "react";
import styles from "./Post.module.scss";

function Post() {
  const [isLoading, changeLoading] = React.useState(false);

  const [isFullPost, changeFull] = React.useState(true);

  const [isEd, changeEd] = React.useState(true);

  if (isLoading) {
    return <SkeletonBlock />;
  }

  return (
    <div className={styles.root}>
      {/* isEd */}
      <div className={styles.edButton}>
        <Link>
          <IconButton color="primary">
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton color="secondary">
          <DeleteIcon />
        </IconButton>
      </div>
      <img
        className={styles.banner}
        src="https://mykaleidoscope.ru/x/uploads/posts/2022-10/1666206241_12-mykaleidoscope-ru-p-kartinka-na-zastavku-oboi-12.jpg"
        alt=""
      />
      <div className={styles.wrapper}>
        <h2>
          
        </h2>
      </div>
    </div>
  );
}

export default Post;
