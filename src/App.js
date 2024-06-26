import Post from "./Post";
import Header from "./Header";
import { useState } from "react";

function App() {

  function handleRemovePost(postId) {
      setPosts((prevState) => (
        prevState.filter((post) => post.id !== postId)
      ))
  }

  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "SubTitle#01",
      likes: 10,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "SubTitle#02",
      likes: 30,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "SubTitle#03",
      likes: 50,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title#04",
      subtitle: "SubTitle#04",
      likes: 60,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${posts.length + 1}`,
        subtitle: `SubTitle#0${posts.length + 1}`,
        likes: 10,
      },
    ]);
  }

  return (
    <>
      <Header title={"Blog JStack"}>
        <h2>
          
          Post da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
        onRemove={handleRemovePost}
        key={post.id}
        post={post}
        />
      ))}
    </>
  );
}

export default App;
