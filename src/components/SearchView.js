import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";

function SearchView() {
    const [searchResults, setSearchResults] = useState([]);
    useEffect(()=>{
        let query = sessionStorage.getItem("searchQuery");
        if (!query) query = ""; 
        searchGame(query).then((res)=>{
            setSearchResults(res);
        });
    },[]);

    var searchItems = searchResults.map((game) => {
        return (
            <SearchItem key={game.id} game={game}/>
        )
    });
    return (
        <div className="flex flex-col h-full bg-emerald-600 p-4 pl-0 overflow-y-scroll search-view">
            <div>
                {searchItems}
            </div>
        </div>
    )
}

export default SearchView;