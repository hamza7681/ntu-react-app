import React from "react";
import par1 from "../../Assets/citixen.png";
import par2 from "../../Assets/ehsas.png";
import par3 from "../../Assets/nest.png";
import par4 from "../../Assets/peef.png";

function Partners() {
  return (
    <>
      <div className="container-fluid" style={{paddingTop:'70px', paddingBottom:"70px"}}>
        <div className="container">
          <div className="row">
            <div className="col-md-3" style={{textAlign:'center'}}>
              <img src={par1} alt="citizen" />
            </div>
            <div className="col-md-3" style={{textAlign:'center'}}>
              <img src={par2} alt="ehsas" />
            </div>
            <div className="col-md-3" style={{textAlign:'center'}}>
              <img src={par3} alt="nest" style={{paddingTop:'50px'}}/>
            </div>
            <div className="col-md-3" style={{textAlign:'center'}}> 
              <img src={par4} alt="peef" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Partners;
