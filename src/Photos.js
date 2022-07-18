import React from "react";
import "./Photos.css";

export default function Photos(props) {
    if (props.photos) {
        return (
            <section className="Photos">
                <div className="row">
                    {props.photos.map(function(photo, index) {
                        return (
                            <div className="col-sm-4" key={index}>
                                <a href={photo.url} target="_blank" rel="noreferrer">
                                    <img src={photo.src.landscape} alt={photo.alt} className="img-fluid"/> 
                                </a>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    } else {
        return null;
    }
}