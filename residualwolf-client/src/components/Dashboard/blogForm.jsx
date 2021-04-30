import React, { Fragment, useState, useContext } from "react";
import Constext from "../../context/ResidualWolf/Context";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default (props) => {
  const constext = useContext(Constext);
  const { addPost } = constext;

  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const [selectedFile, setSelectedFile] = useState();
  // const [html, setHtml] = useState();

  const { title, description, thumbnail } = post;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("thumbnail", selectedFile);
  formData.append("description", description);
  const onChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };
  const onChange1 = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addPost(formData);
    props.history.push("/blog-list");
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">

      
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label  className="font-20 font-bold">Title</label>
                  <input
                    onChange={onChange}
                    name="title"
                    value={title}
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder=""
                    required
                  />
                </div>
                <div className="form-group">
                  <label  className="font-20 font-bold">Thumbnail</label>
                  <input
                    onChange={onChange1}
                    name="thumbnail"
                    value={thumbnail}
                    type="file"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder=""
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlTextarea1 font-bold">Content</label>
                  <textarea
                    onChange={onChange}
                    name="description"
                    value={description}
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <button type="submit" class="btn btn-primary">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
