import Post from "../../components/Post";
import CommentsBlock from "../../components/CommentsBlock";
import AddComment from "../../components/AddComment";
import { useParams } from "react-router";
import React from "react";
import axios from "../../axios";
import ReactMarkdown from "react-markdown";

function FullPost() {
  const { id } = useParams();

  const [article, SetArticle] = React.useState(null);
  const [isPostLoading, setIsPostLoading] = React.useState(true);

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        SetArticle(res.data);
        setIsPostLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(article);
  return (
    <>
      {article && (
        <>
          <Post
            id={article._id}
            title={article.title}
            createAt={article.updateAt}
            tags={article.tags}
            viewsNumber={article.viewsNumber}
            commentsCount={7}
            user={article.user}
            imageUrl={ article.imageUrl ? `http://localhost:4444${article.imageUrl}` : ''}
            isPostLoading={isPostLoading}
            isFullPost={true}
          >
            <ReactMarkdown children={article.text}></ReactMarkdown>
          </Post>
          <CommentsBlock items={[111, 1111, 222]}>
            <AddComment />
          </CommentsBlock>
        </>
      )}
    </>
  );
}

export default FullPost;
