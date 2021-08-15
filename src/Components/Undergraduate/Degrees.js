import React from "react";

function Degrees(props) {
  return (
    <>
      <div class="card" style={{width: "18rem"}}>
        <img class="card-img-top" src={props.src} alt="Card image cap" />
        <div class="card-body">
          <p class="card-text" style={{textAlign:"center", fontSize:"15px"}}>
            {props.title}
          </p>
        </div>
      </div>
    </>
  );
}

export default Degrees;
