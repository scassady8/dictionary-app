import { React, useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword]= useState(null);
    let [results, setResults]= useState(null);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function searchKeyword(event) {
        event.preventDefault();
        let APIUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(APIUrl).then(handleResponse);
    }

    function updateKeyword(event) {
        event.preventDefault();
        setKeyword(event.target.value); 
    }

    return (
        <div className="Search">
            <section>
                <p>What word would you like to search for?</p>
                <form onSubmit={searchKeyword}>
                    <input type="search" placeholder='Enter a word' className="form-control w-50" onChange={updateKeyword}/>
                </form>
            </section>
            <Results results={results}/>
        </div>
    )
}