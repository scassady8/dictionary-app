import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
      <i className="fa-solid fa-circle-play"></i>
      </a> 
      <span className="ms-3">{props.phonetic.text}</span> 
    </div>
  );      
}