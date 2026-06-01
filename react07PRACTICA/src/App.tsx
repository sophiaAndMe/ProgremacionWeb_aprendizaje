import Home from "./pages/Home.tsx";
import {Route, Routes} from "react-router-dom";
import About from "./pages/About.tsx";
import Posts from "./pages/Posts.tsx";
import PostDetails from "./pages/PostDetails.tsx";
import Comment from "./pages/Comment.tsx";
function App() {


  return (
    <>
      <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/posts"} element={<Posts/>} ></Route>
            <Route path={"/posts/:id"} element={<PostDetails/>}/>
            <Route path={"post/:id/comments"} element={<Comment/>} />
        </Routes>
        </>
  )
}

export default App
