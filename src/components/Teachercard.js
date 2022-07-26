import React from "react";
import data from '../data'
const Teachercard = () => {
  return (
    <div>
      
<div className="container">
  <div className="row m-auto">

{
  data.teacherData.map((a)=>{
    console.log(a);
    <div className="col-lg-4 col-md-12 col-sm-12">
    <div className="card  m-auto  w-100" style={{width: '17rem'}}>
      <img className="card-img-top" src={a.img} alt={a.img} />
      <div className="card-body">
        <h5 className="card-title">{a.title}</h5>
        <p className="card-text">{a.desc}</p>
        <a href="#" className="btn btn-primary">Check Profile</a>
      </div>
    </div>
  </div>
  })
}


  
  </div>
</div>


    </div>
  );
};

export default Teachercard;
