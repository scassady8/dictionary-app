import { React, useState } from "react";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword]= useState(null);

    function searchKeyword(event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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