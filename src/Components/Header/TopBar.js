import React from 'react'
import {FiSearch} from 'react-icons/all';

function TopBar() {
    return (
        <>
         <div className="container-fluid" style={{backgroundColor:'#efe3af'}}>
             <div className="row" style={{paddingTop:'15px', paddingBottom:'15px'}}>
                 <div className="col-md-1"></div>
                 <div className="col-md-5">
                     <a href="#" className="link2" >Karachi Campus</a>
                     <a href="#" className="link2" >Financial Aid</a>
                     <a href="#" className="link2" >Student Portal</a>
                     <a href="#" className="link2" >Faculty</a>
                 </div>
                 <div className="col-md-1"></div>
                 <div className="col-md-4">
                 <a href="#" className="link2" >Webmail Change Password</a>
                     <a href="#" className="link2" >Webmail</a>
                     <a href="#" className="link2" ><FiSearch/></a>
                 </div>
                 <div className="col-md-1"></div>
             </div>
             </div>   
        </>
    )
}

export default TopBar
