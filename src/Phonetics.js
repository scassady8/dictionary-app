import React from "react";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
      <i class="fa-solid fa-circle-play"></i>
      </a> 
      <span className="ms-2">{props.phonetic.text}</span> 
    </div>
  );      
}