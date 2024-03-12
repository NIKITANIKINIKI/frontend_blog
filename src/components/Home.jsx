import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import CommentBlock from "./CommentsBlock";
import TagsBlock from "./TagBlock";
import Post from "./Post";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { postsItems, tagsItems } from "../redux/slice/posts";

function Home() {
  const { posts, tags } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const isPostLoading = posts.status === "loading";

  React.useEffect(() => {
    dispatch(postsItems());
    dispatch(tagsItems())
  }, []);
  console.log(isPostLoading);
  console.log(posts);

  return (
    <>
      <Tabs
        value={0}
        aria-label="secondary tabs example"
        textColor="secondary"
        indicatorColor="secondary"
        style={{ marginBottom: "20px" }}
      >
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          {(isPostLoading ? [...Array(5)] : posts.items).map((el, index) =>
            isPostLoading ? (
              <Post 
              key={index} 
              isPostLoading={isPostLoading}
              />
            ) : (
              <Post
              key={el._id}
              id={el._id}
              title={el.title}
              createAt={el.updateAt}
              tags={el.tags}
              viewsNumber={el.viewsNumber}
              commentsCount={7}
              user={el.user}
              imageUrl={el.imageUrl ? `${el.imageUrl}` : ''}
              isPostLoading={isPostLoading}
              isFullPost={false}
              />
            )
          )}
        </Grid>
        <Grid item xs={4}>
          <TagsBlock  items={tags.items} />
          <CommentBlock items={["ts", "react", "js", "vue"]} isPostLoading={isPostLoading} />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
