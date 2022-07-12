import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
    if (props.results) {
    return (
        <div className="Meanings">
            <h2 className="text-capitalize">{props.results.word}</h2>
            {props.results.phonetics.map(function(phonetic, index){
                return (
                    <div key={index}>
                        <Phonetics phonetic={phonetic} />
                    </div>
                );
            })}
            <h3>Meanings</h3>
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