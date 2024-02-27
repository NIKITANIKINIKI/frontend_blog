import { Paper, Button, TextField} from "@mui/material";
import SimpleMDE from 'react-simplemde-editor'

function AddPost() {
  return (
    <Paper>
      <Button variant="outlined">Download preview</Button>
      <input type="file"></input>
      <TextField variant="standard" placeholder="Title..." fullWidth />
      <TextField variant="standard" placeholder="Tags" fullWidth />
      <SimpleMDE/>
      <Button variant='contained'>Publish</Button>
      <Button  variant='contained'>cancel</Button>
    </Paper>
  );
}

export default AddPost;
