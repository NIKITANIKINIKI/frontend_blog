import Header from "./components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./components/Home";
import Container from "@mui/material/Container";
import FullPost from "./pages/FullPost";
import AddPost from "./pages/AddPost";


function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        {/* <Login/> */}
        {/* <Registration/> */}
        {/* <Home /> */}
        {/* <FullPost/> */}
        <AddPost/>
      </Container>
    </>
  );
}

export default App;
