import React from "react";
import data from "../data";

const Teacherdata = (props) => {
//   const { products } = props;
//   console.log(data);
const { products } = data;

  return (
    <div>
 
{
    products.map((a)=>(
        <div>
            <h1>{a.title}</h1>
        </div>
    ))
}
    </div>
  );
};

export default Teacherdata;
