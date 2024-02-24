import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import styles from "./Login.module.scss";

function Login() {
  return (
    <Paper className={styles.content}>
      <Typography className={styles.title} variant="h4">
        Hello!
      </Typography>
      <TextField
        error
        helperText="Incorrect email"
        label="Your email"
        fullWidth
      />
      <TextField label="Your password" fullWidth />
      <div className={styles.login}>
        <Typography variant="caption">
          Have your forgotten your password?
        </Typography>
        <Button size="lg" variant="contained">
          Login
        </Button>
      </div>
    </Paper>
  );
}

export default Login;
