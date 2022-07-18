import { React, useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Search.css";

export default function Search() {
    let [keyword, setKeyword]= useState(null);
    let [results, setResults]= useState(null);
    let [photos, setPhotos]= useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function searchKeyword(event) {
        event.preventDefault();
        let APIUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(APIUrl).then(handleDictionaryResponse);

        let Pexelskey="563492ad6f917000010000013f4e44986ea94f03b86213cfa68339f4";
        let PexelsAPIUrl=`https://api.pexels.com/v1/search?query=${keyword}&per_page=12`;
        let headers = { Authorization: `Bearer ${Pexelskey}`};
        axios.get(PexelsAPIUrl, { headers : headers }).then(handlePexelsResponse);

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
            <Photos photos={photos} />
        </div>
    )
}