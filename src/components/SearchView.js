import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import tempGameData from "./TempData";
function SearchView() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(()=>{
        let query = sessionStorage.getItem("searchQuery");
        if (!query) query = ""; 
        // searchGame(query).then((res)=>{
        //     setSearchResults(res);
        // });
        setSearchResults(tempGameData);
    },[]);

    var searchItems = searchResults.map((game) => {
        return (
            <SearchItem key={game.id} game={game}/>
        )
    });
    return (
        <div className="flex flex-col h-full bg-emerald-600 p-4">
            <div className="flex flex-col h-full bg-emerald-700 p-2 pb-0 rounded-md overflow-y-scroll search-view">    
                {searchItems}
            </div>
        </div>
    )
}

export default SearchView;