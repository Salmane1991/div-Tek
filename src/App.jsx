import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const App = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   axios.get("http://localhost:5000/api/blogs")
  //     .then((response) => {
  //       setBlogs(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("There was an error fetching the blogs:", error);
  //     });
  // }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Blogging App</h1>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-4">
            <div className="card mb-4">
              <img src={blog.image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 100)}...</p>
                <a href="#" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
