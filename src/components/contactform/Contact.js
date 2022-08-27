import React from 'react';
import '../contactform/contact.css'
const Contact = () => {
    return (
       
<div>
<h1 className="text-black mb-4 text-center">Student Registration Form</h1>

<section className='background mt-2'  >
  
  <div className="container h-100">
    
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-9">
        <div className="card" style={{borderRadius: 15}}>
          <div className="card-body">
            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Full name</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input type="text" className="form-control form-control-lg" />
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Email address</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input type="email" className="form-control form-control-lg" placeholder="example@example.com" />
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="row align-items-center pt-4 pb-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Teacher name</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input type="text" className="form-control form-control-lg" />
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="row align-items-center py-3">
              <div className="col-md-3 ps-5">
                <h6 className="mb-0">Upload Image</h6>
              </div>
              <div className="col-md-9 pe-5">
                <input className="form-control form-control-lg" id="formFileLg" type="file" />
                <div className="small text-muted mt-2">Upload your CV/Resume or any other relevant file. Max file
                  size 50 MB</div>
              </div>
            </div>
            <hr className="mx-n3" />
            <div className="px-5 py-4">
              <button type="submit" className="btn btn-primary btn-lg">Send application</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


</div>
  
    );
};

export default Contact;