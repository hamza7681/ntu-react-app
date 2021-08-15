import React from "react";
import "./style.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/all";

function Faculty() {
  return (
    <>
      <h4 id="fac">Faculty & Staff</h4>

      <div id="bor"></div>
      <br />
      <div>
        <ul id="list__pic">
          <li>
            <a href="#">NTU Webmail</a>
          </li>
          <li>
            <a href="#">Update Profile</a>
          </li>
          <li>
            <a href="#">Faculty & Staff Handbook</a>
          </li>
          <li>
            <a href="#">Faculty Publications</a>
          </li>
        </ul>
      </div>
      <br />
      <div>
        <span id="icons">
          <a href="#">
            <FaFacebookF />
          </a>
        </span>
        <span id="icons">
          <a href="#">
            <FaTwitter />
          </a>
        </span>
        <span id="icons">
          <a href="#">
            <FaLinkedinIn />
          </a>
        </span>
        <span id="icons">
          <a href="#">
            <FaYoutube />
          </a>
        </span>
      </div>
      <br/><br/>
    </>
  );
}

export default Faculty;
