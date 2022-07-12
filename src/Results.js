import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Meanings">
            <h2 className="text-capitalize">{props.results.word}</h2>
            <h3>Definition</h3>
            {props.results.meanings.map(function(meaning, index){
                return (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
    } else {
    return null;
    }
}