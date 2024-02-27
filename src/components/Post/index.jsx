import SkeletonBlock from "./SkeletonBlock";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Clear";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";
import EyeIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CommentIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import React from "react";
import styles from "./Post.module.scss";

function Post({ children }) {
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
        <UserInfo />
        <div className={styles.description}>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            voluptate.
          </h2>
          <ul className={styles.tags}>
            <li>
              <Link>#js</Link>
            </li>
            <li>
              <Link>#ts</Link>
            </li>
            <li>
              <Link>#ts</Link>
            </li>
          </ul>
          <span className={styles.text}>{children}</span>
          <ul className={styles.icons}>
            <li>
              <EyeIcon style={{ color: "green" }} />
              <span>100</span>
            </li>
            <li>
              <CommentIcon style={{ color: "red" }} />
              <span>200</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
