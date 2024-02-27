import { Avatar, TextField, Button } from "@mui/material";
import styles from './AddComment.module.scss'

function AddComment() {
  return (
    <div className={styles.root}>
      <Avatar classes={{root: styles.avatar}} src="https://proprikol.ru/wp-content/uploads/2019/12/dzhungli-krasivye-kartinki-na-rabochij-stol-23.jpg"></Avatar>
      <div className={styles.form}>
        <TextField label="Add comment" maxRows={10} multiline fullWidth />
        <Button variant="contained">Send</Button>
      </div>
    </div>
  );
}

export default AddComment;
