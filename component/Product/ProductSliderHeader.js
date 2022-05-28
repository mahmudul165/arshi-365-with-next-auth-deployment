import React from "react";

function ProductSliderHeader({ catagoryName }) {
  //console.log("props", props);
  return (
    <h3 className="fs-1 fw-bolder pt-3 my-3" style={{ color: "#FF0099" }}>
      {catagoryName}
    </h3>
  );
}

export default ProductSliderHeader;
