import { React, useState } from "react";
import axios from "axios";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword]= useState(null);

    function handleResponse(response){
        console.log(response);
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
            <form onSubmit={searchKeyword}>
                <input type="search" placeholder='Enter a word' onChange={updateKeyword}/>
            </form>
        </div>
    )
}