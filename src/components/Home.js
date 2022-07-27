import React from "react";
// import Teacherdata from "../components/Teacherdata";
import Teacherdata from '../components/Teacherdata';

const Home = () => {

  return (
    <div className=" text-center">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/4778662/pexels-photo-4778662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="container mt-4">
        <div class="jumbotron">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img img-fluid img-responsive about"
                src="https://img.freepik.com/free-photo/clever-korean-schoolgirl-has-serious-sullen-look-folds-lips-holds-pencil-notepad-head_273609-34064.jpg?w=740&t=st=1658752514~exp=1658753114~hmac=b6bf11fa09334d373a261bd25f1a2d8bfaff7ac136bffe4746313a42d265fc4d"
              ></img>
            </div>
            <div className="col-md-6 mt-5">
              <div className="text">
                <h1 className="mt-4">About us</h1>
                <p className="ml-4">
                  On the Insert tab, the galleries include items that are
                  designed to coordinate with the overall look of your document.
                  You can use these galleries to insert tables, headers,
                  footers, lists, cover pages, and other document building
                  blocks.
                  <br />
                  <br />
                  On the Insert tab, the galleries include items that are
                  designed to coordinate with the overall look of your document.
                  You can use these galleries to insert tables, headers,
                  footers, lists, cover pages, and other document building
                  blocks. When you create pictures, charts, or diagrams, they
                  also coordinate with your current document look.
                </p>
                <button
                  type="button"
                  class="btn btn-secondary btn-lg mt-3"
                  id="btn-color"
                >
                  Large button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Teacherdata/>

{/* <Teacherdata/> */}
    
    </div>
  );
};

export default Home;
