import axios from "axios";
import { useEffect, useState } from "react";

const Menu = ({ cat }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts/?cat=${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);

  // const posts = [
  //   {
  //     id: 1,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsa, debitis iure quis dicta consectetur itaque, atque quos est voluptas nostrum optio quaerat et nemo minus cupiditate obcaecati illo expedita",
  //     img: "https://images.pexels.com/photos/672101/pexels-photo-672101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 2,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsa",
  //     img: "https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  //   {
  //     id: 3,
  //     title: "Lorem ipsum dolor sit amet consectetur",
  //     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsa, debitis iure quis dicta consectetur itaque, atque quos est voluptas nostrum optio quaerat et nemo minus cupiditate obcaecati illo expedita",
  //     img: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   },
  // ];

  return (
    <div className="menu">
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={`../upload/${post?.img}`} alt="post" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  );
};
export default Menu;
