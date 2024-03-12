import Header from "./components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./components/Home";
import Container from "@mui/material/Container";
import FullPost from "./pages/FullPost";
import AddPost from "./pages/AddPost";

import {Routes, Route} from 'react-router'

function App() {
  return (
    <>
      <Header />
      <Container maxWidth='lg'>
        <Routes>
          <Route element={<Home />} path='/'></Route>
          <Route element={<Login/>} path='/login'></Route>
          <Route element={<Registration/>} path='/registration'></Route>
          <Route element={<FullPost/>} path='/posts/:id'></Route>
          <Route element={<AddPost/>} path='/add-post'></Route>
          
        </Routes>
      </Container>
    </>
  );
}

export default App;
