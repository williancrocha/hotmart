import Post from "./Post";
import Header from "./Header";
import { useState } from "react";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "SubTitle#01",
      likes: 10,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "SubTitle#02",
      likes: 30,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "SubTitle#03",
      likes: 50,
    },
    {
      id: Math.random(),
      title: "Title#04",
      subtitle: "SubTitle#04",
      likes: 60,
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
      <Header>
        <h2>
          Post da Semana
          <button onClick={handleRefresh}>Atualizar</button>
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
        />
      ))}
    </>
  );
}

export default App;
