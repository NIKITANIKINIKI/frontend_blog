import Header from "./components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./components/Home";
import Container from "@mui/material/Container";


function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        {/* <Login/> */}
        {/* <Registration/> */}
        <Home />
      </Container>
    </>
  );
}

export default App;
