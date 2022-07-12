import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
    return (
        <div>
            <h4>{props.meaning.partOfSpeech}</h4>
            {props.meaning.definitions.map(function(definition, index){
                return (
                    <div key={index}>
                        <p>
                           <strong>Definition:</strong> {definition.definition}
                            <br />
                            <em>{definition.example}</em> 
                            <Synonyms synonyms={definition.synonyms} />
                        </p>
                    </div>
                ); 
            })}                          
        </div>
    );
}