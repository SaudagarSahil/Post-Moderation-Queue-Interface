import "./App.css";
import PostList from "./components/postList";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <PostList />
      <ToastContainer />
    </>
  );
}

export default App;
