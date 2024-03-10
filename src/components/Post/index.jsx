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

function Post({
  children,
  isPostLoading,
  title,
  createAt,
  tags,
  viewsNumber,
  user,
  imageUrl,
  commentsCount
}) {
  const [isFullPost, changeFull] = React.useState(true);

  const [isEd, changeEd] = React.useState(true);

  if (isPostLoading) {
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
      <img className={styles.banner} src={imageUrl} alt="photo" />
      <div className={styles.wrapper}>
        <UserInfo user={user} />
        <div className={styles.description}>
          <h2>{title}</h2>
          <ul className={styles.tags}>
            {tags.map((el) => (
              <li>
                <Link>#{el}</Link>
              </li>
            ))}
          </ul>
          <span className={styles.text}>{children}</span>
          <ul className={styles.icons}>
            <li>
              <EyeIcon style={{ color: "green" }} />
              <span>{viewsNumber}</span>
            </li>
            <li>
              <CommentIcon style={{ color: "red" }} />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Post;
