import React from "react";
import data from "../data";

const Teacherdata = (props) => {
  //   const { products } = props;
  //   console.log(data);
  const { products } = data;

  return (
    <div>
      <div className="container-fluid">
        <div className="row">

          {products.map((a) => (
                    <div className="col-lg-4 col-md-12 col-sm-12">

                <div className="card  m-auto  w-100" style={{ width: "18rem" }}>
                  {/* <h1>{a.title}</h1> */}

                  <img className="card-img-top" src={a.img} alt={a.img} />
                  <div className="card-body">
                    <h3 className="card-title">{a.title}</h3>
                    <p className="card-text">{a.desc}</p>
                    <a href="#" className="btn btn-primary">
                      Go somewhere
                    </a>
                  </div>
                </div>
              </div>
          ))}
             </div>
      
      </div>
    </div>
  );
};

export default Teacherdata;
