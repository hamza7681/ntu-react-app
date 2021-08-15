import React from "react";
import Degrees from "./Degrees";
import Heading from "./Heading";
import deg1 from '../../Assets/bste.jpg';
import deg2 from "../../Assets/bscs.jpg";
import deg3 from "../../Assets/bsse.jpg";
import deg4 from "../../Assets/bsit.jpg";
import deg5 from "../../Assets/bspe.jpg";
import deg6 from "../../Assets/bfd2.jpg";
import deg7 from "../../Assets/btd1.jpg";
import deg8 from "../../Assets/bva.jpg";
import deg9 from "../../Assets/bsam.jpg";
import deg10 from "../../Assets/BAMD.jpg";
import deg11 from "../../Assets/BSAManu.jpg";
import deg12 from "../../Assets/bstt.jpg";


function Undergraduate() {
  return (
    <>

      <div className="container-fluid" style={{paddingRight:'40px', paddingLeft:'40px', backgroundColor:'#f1f3f7', paddingTop:'30px', paddingBottom:'40px'}}>
      <Heading/>
      <br/><br/>
        <div className="row">
          <div className="col-md-3">
              <Degrees  src={deg1} title="BS Texttile Engineering"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg2} title="BS Computer Science"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg3} title="BS Software Engineering"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg4} title="BS Artificial Intelliegence"/>
          </div>
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-md-3">
              <Degrees  src={deg5} title="BS Polymer Engineering"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg6} title="Bachelor of Faishon Design"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg7} title="Bachelor of Textile Design"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg8} title="Bachelor of Visual Arts"/>
          </div>
        </div>
        <br/><br/>
        <div className="row">
          <div className="col-md-3">
              <Degrees  src={deg9} title="BS Textile & Apparel Marchendizing "/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg10} title="Bachelor of A & M Design "/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg11} title="BS Apparel Manufacturing"/>
          </div>
          <div className="col-md-3">
          <Degrees  src={deg12} title="BS Textile Engineering Technology "/>
          </div>
        </div>

      </div>
    </>
  );
}

export default Undergraduate;
