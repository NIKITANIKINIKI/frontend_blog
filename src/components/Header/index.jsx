import { Link } from "react-router-dom";


import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styles from './Header.module.scss'

function Header() {
  return (
    <div className={styles.container}>
      <Container maxWidth="lg">
        <div className={styles.content}>
          <Link to="" className={styles.emblem}>
            <div>BlogS++</div>
          </Link>
          <div className={styles.buttons}>
            <Link to="/login">
              <Button color="secondary" variant="contained">Login</Button>
            </Link>
            <Link to="/registration">
              <Button color="success" variant="contained">Sign up</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
