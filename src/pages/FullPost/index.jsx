import Post from "../../components/Post";
import CommentsBlock from "../../components/CommentsBlock";
import AddComment from "../../components/AddComment";

function FullPost() {
  return (
    <>
      <Post>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione quae
        delectus excepturi odio perspiciatis magni fugiat veritatis suscipit
        veniam ducimus inventore, molestias, eos ad, aut mollitia ex facere
        voluptatum expedita quo. Temporibus sapiente doloribus maiores deleniti
        voluptate quod suscipit eos animi maxime, ipsam non ab eum ut. Quod
        molestiae quam voluptas hic ut tempora doloremque, incidunt quas
        reprehenderit, natus animi nisi error ducimus quo sunt explicabo
        consectetur. Deleniti, illum! Sequi similique nesciunt qui, incidunt
        quam necessitatibus sunt impedit omnis ipsum odit eaque neque unde non
        fugit ratione? Tempora quasi nulla, facere quod ullam impedit vero neque
        atque quo officiis odio?
      </Post>
      <CommentsBlock items={[111, 1111, 222]}>
        <AddComment />
      </CommentsBlock>
    </>
  );
}

export default FullPost;
