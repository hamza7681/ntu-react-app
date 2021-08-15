import React from 'react';
import "./style.css";


function Map() {
    return (
        <>
            <div className="container-fluid" style={{background:'rgba(0,0,0,0.9)', paddingBottom:'30px', paddingTop:'30px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6" id='bd1'>
                            <h4 className="heading1">STREAMLNING CORRECT USE OF PAKISTAN POLITICAL MAP </h4>
                        </div>
                        <div className="col-md-6" id="bd2">
                            <h4 style={{fontWeight:"400", textAlign:'center'}} id="heading3"><span style={{color:'#faae2f'}}><a href="#" className="link3">Click to View Pakistan</a> Political Map</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Map;
