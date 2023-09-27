import { useStateContext } from "./lib/context";
import "./style.scss";
import BlogPost from "./Components/BlogPost";

function App() {
  const { posts } = useStateContext();
  return (
    <>
      {posts.length == 0 ? (
        <p>No Blog Posts!</p>
      ) : (
        <div className="postsContainer">
          {posts.map((postData) => (
            <BlogPost key={postData.id} post={postData} />
          ))}
        </div>
      )}
    </>
  );
}

export default App;
