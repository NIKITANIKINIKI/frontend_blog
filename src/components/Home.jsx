import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from '@mui/material/Grid';
import CommentBlock from "./CommentsBlock";
import TagsBlock from './TagBlock'
import Post from "./Post";



function Home() {
  return (
    <>
      <Tabs value={0} aria-label="secondary tabs example" textColor="secondary" indicatorColor='secondary' style={{marginBottom:'20px'}}>
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={2}>
            <Grid item xs={8}>
              <Post/>
              <Post/>
              <Post/>
            </Grid>
            <Grid item xs={4}>
                <TagsBlock items={['ts', 'react', 'js', 'vue']} />
                <CommentBlock/>
            </Grid>
      </Grid>
    </>
  );
}

export default Home;
