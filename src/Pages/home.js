import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const cat = useLocation().search;

  const handleSearch = () => {
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredPosts);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  const getText = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent;
  };

  return (
    <>
      <div className="home">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="posts">
          {searchResults.length > 0
            ? searchResults.map((post) => (
                <div className="post" key={post.id}>
                  <div className="img">
                    <img src={`../upload/${post.img}`} alt="post-img" />
                  </div>
                  <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>
                    <Link className="link" to={`/post/${post.id}`}>
                      <button>Read</button>
                    </Link>
                  </div>
                </div>
              ))
            : posts.map((post) => (
                <div className="post" key={post.id}>
                  <div className="img">
                    <img src={`../upload/${post.img}`} alt="post-img" />
                  </div>
                  <div className="content">
                    <Link className="link" to={`/post/${post.id}`}>
                      <h1>{post.title}</h1>
                    </Link>
                    <Link className="link" to={`/post/${post.id}`}>
                      <button>Read</button>
                    </Link>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Home;
