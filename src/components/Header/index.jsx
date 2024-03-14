import { Link } from "react-router-dom";
import { selectIsAuth, logout } from "../../redux/slice/login";
import { useSelector, useDispatch } from "react-redux";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import styles from "./Header.module.scss";

function Header() {
  const isAuth = useSelector(selectIsAuth);

  const dispatch=useDispatch()

  const onClickLogout=()=>{
    dispatch(logout())
  }

  return (
    <div className={styles.container}>
      <Container maxWidth="lg">
        <div className={styles.content}>
          <Link to="" className={styles.emblem}>
            <div>BlogS++</div>
          </Link>
          <div className={styles.buttons}>
            {!isAuth ? (
              <>
                <Link to="/login">
                  <Button color="secondary" variant="contained">
                    Login
                  </Button>
                </Link>
                <Link to="/registration">
                  <Button color="success" variant="contained">
                    Sign up
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="">
                  <Button color="success" variant="contained">
                    Create post
                  </Button>
                </Link>
                <Button onClick={onClickLogout} color="secondary" variant="contained">
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
