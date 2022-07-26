import React from "react";

const Body = () => {
  return (
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
             
                On the Insert tab, the galleries include items that are designed
                to coordinate with the overall look of your document. You can
                use these galleries to insert tables, headers, footers, lists,
                cover pages, and other document building blocks.
                <br />
                <br />
                On the Insert tab, the galleries include items that are designed
                to coordinate with the overall look of your document. You can
                use these galleries to insert tables, headers, footers, lists,
                cover pages, and other document building blocks. When you create
                pictures, charts, or diagrams, they also coordinate with your
                current document look.
              </p>
              <button type="button" class="btn btn-secondary btn-lg mt-3" id="btn-color">Large button</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
