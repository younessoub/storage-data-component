import React from "react";
import "./Storage.css";
import logo from "../../images/logo.svg";
import document from "../../images/icon-document.svg";
import folder from "../../images/icon-folder.svg";
import upload from "../../images/icon-upload.svg";

function Storage({ used, max }) {
  return (
    <div className="Storage">
      <div className="Storage-header">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons">
          <div className="icon-container">
            <img src={document} alt="document-icon" />
          </div>
          <div className="icon-container">
            <img src={folder} alt="folder-icon" />
          </div>
          <div className="icon-container">
            <img src={upload} alt="upload-icon" />
          </div>
        </div>
      </div>
      <div className="Storage-stats">
        <p className="info">
          You’ve used <b>{used} GB</b> of your storage
        </p>
        <div class="progress-container">
          <div
            className="progress-bar"
            style={{
              width: `${Math.round((used / max) * 100)}%`,
            }}
          ></div>
        </div>
        <p className="limits">
          <i>0 GB</i>
          <i>1000 GB</i>
        </p>
        <div className="bubble">
          <h2>{max - used}</h2>
          <p className="bubble-text">GB LEFT</p>
        </div>
      </div>
    </div>
  );
}

export default Storage;
