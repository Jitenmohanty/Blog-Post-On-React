import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Home, CreatePost, PostDetails } from './';


function App() {
  return (
        <>
        <Navbar/>
      <Routes>
        <Route exact path="/post/:postId"
          element=
          {
            <PostDetails/>
          }
          />
        <Route exact path="/create-post"
          element=
          {
            <CreatePost/>
          }
        />
        <Route exact path="/"
          element=
          {
            <Home/>
          }
        />
        
        </Routes>
        </>
  );
}

export default App;
