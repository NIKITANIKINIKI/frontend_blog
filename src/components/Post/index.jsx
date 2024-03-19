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
import axios from "../../axios";
import clsx from 'clsx'

function Post({
  children,
  id,
  isPostLoading,
  title,
  createAt,
  tags,
  viewsNumber,
  user,
  imageUrl,
  commentsCount,
  isFullPost,
  isAuthor
}) {

  const [isEd, changeEd] = React.useState(true);

  if (isPostLoading) {
    return <SkeletonBlock />;
  }

  return (
    <div className={clsx(styles.root, { [styles.rootNoFullPost]: !isFullPost && isAuthor })}>
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
      {imageUrl && <img className={styles.banner} src={imageUrl} alt="photo" />}
      <Link to={`/posts/${id}`}>
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
      </Link>
    </div>
  );
}

export default Post;
