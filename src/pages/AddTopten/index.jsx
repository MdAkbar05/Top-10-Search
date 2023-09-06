import React, { useState } from "react";
import axios from "axios";
function AddTopten() {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [src, setSrc] = useState("");

  // const handleImageChange = (e) => {
  //   // Handle image file upload here
  //   const selectedImage = e.target.files[0];
  //   setImage(selectedImage);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addValues = {
      category,
      title,
      description,
      imageSrc,
      src,
    };
    axios
      .post("http://localhost:3000/users/addTopten", addValues)
      .then((res) => {
        alert("Added Topten list Successfully on MongoDB");
      });

    console.log("Category:", category);
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("ImageSrc:", imageSrc);
    console.log("Src:", src);
  };

  return (
    <div className="container mt-5">
      <h1>Add to Top Ten</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            className="form-select"
            id="category"
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            name="category"
            required
          >
            <option value="">Select a Category</option>
            <option value="University">Topten University</option>
            <option value="AI">Topten AI</option>
            <option value="Technology">Topten Technology</option>
            <option value="Books">Topten Books</option>
            <option value="Movies">Topten Movies</option>
            <option value="Sports">Topten Sports</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            name="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="description"
            rows="4"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            name="description"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="src" className="form-label">
            Source
          </label>
          <input
            type="text"
            className="form-control"
            id="src"
            value={src}
            onChange={(e) => {
              setSrc(e.target.value);
            }}
            name="src"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="image"
            onChange={(e) => {
              setImageSrc(e.target.value);
            }}
            name="imageSrc"
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Submit" />
      </form>
    </div>
  );
}

export default AddTopten;
