import React from 'react';
import Faculty from './Faculty';
import Studetns from "./Students";
import Links from "./Links";
import Conference from './Conference';

function Footer() {
    return (
        <>
            <div className="container-fluid" style={{backgroundColor:'#1e2022', paddingBottom:'50px', paddingTop:'50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <Faculty/>
                        </div>
                        <div className="col-md-3">
                            <Studetns/>
                        </div>
                        <div className="col-md-2">
                            <Links/>
                        </div>
                        <div className="col-md-4">
                            <Conference/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
