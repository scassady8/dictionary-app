import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="mb-4">
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index} className="definitions">
                        <span className="pe-2 opacity-75">{index +1}</span> {definition.definition}
                        <div className="example"><em>{definition.example}</em></div>
                        <Synonyms synonyms={definition.synonyms} />
                    </div>
                ); 
            })}                          
        </div>
    );
}