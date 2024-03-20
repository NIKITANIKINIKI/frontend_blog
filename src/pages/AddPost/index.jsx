import { Paper, Button, TextField } from "@mui/material";
import SimpleMDE from "react-simplemde-editor";
import styles from "./AddPost.module.scss";
import React from "react";
import "easymde/dist/easymde.min.css";
import axios from "../../axios";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsAuth } from "../../redux/slice/login";

function AddPost() {
  const { id } = useParams();

  const isEdit=Boolean(id)

  const isAuth = useSelector(selectIsAuth);

  const navigate = useNavigate();
  const inputRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [text, setText] = React.useState();
  const [title, setTitle] = React.useState();
  const [tags, setTags] = React.useState();
  const [imageUrl, setImageUrl] = React.useState();

  const onChange = React.useCallback((text) => {
    setText(text);
  });

  const loadingImage = async (event) => {
    try {
      const formsData = new FormData();

      const file = event.target.files[0];

      formsData.append("image", file);

      const { data } = await axios.post("/upload", formsData);

      setImageUrl(data.url);
    } catch (error) {
      console.warn(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      axios.get(`/posts/${id}`).then(({data}) => {
        setText(data.text);
        setTags(data.tags);
        setTitle(data.title);
        setImageUrl(data.imageUrl);
      }).catch((err) => {
        console.log(err)
      })
    }
  }, []);

  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: "200px",
      autofocus: true,
      placeholder: "Enter the text...",
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
      },
    }),
    []
  );

  const onSubmit = async () => {
    try {
      setLoading(true);

      const fields = {
        text,
        title,
        tags: tags.split(","),
        imageUrl,
      };

      const { data } = await !isEdit ? axios.post("/posts", fields) : axios.patch(`/posts/${id}`, fields)

      const _id = isEdit ? id : data._id;

      navigate(`/posts/${_id}`);
    } catch (err) {
      console.warn(err);
    }
  };

  if (!window.localStorage.getItem("token") && !isAuth) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className={styles.root}>
      <Paper>
        <div className={styles.loading}>
          <Button variant="outlined" onClick={() => inputRef.current.click()}>
            Download preview
          </Button>
          <input
            ref={inputRef}
            type="file"
            hidden
            onChange={loadingImage}
          ></input>
          <Button
            onClick={() => setImageUrl("")}
            variant="contained"
            color="error"
            disabled={!Boolean(imageUrl)}
          >
            Delete picture
          </Button>
        </div>
        <div className={styles.content}>
          {imageUrl && (
            <>
              <img
                className={styles.image}
                src={`http://localhost:4444${imageUrl}`}
                alt="photo"
              />
            </>
          )}
          <TextField
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            variant="standard"
            placeholder="Title..."
            fullWidth
          />
          <TextField
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            variant="standard"
            placeholder="Tags"
            fullWidth
          />
          <SimpleMDE
            className={styles.editor}
            value={text}
            onChange={onChange}
            options={options}
          />
          <div className={styles.buttons}>
            <Button variant="contained" onClick={() => onSubmit()}>
              {isEdit ? 'Save' : 'Publish'}
            </Button>
            <Link to="/">
              <Button variant="contained" color="error">
                cancel
              </Button>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default AddPost;
