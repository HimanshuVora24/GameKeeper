import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import tempGameData from "./TempData";
import AddPanel from "./AddPanel";
function SearchView() {
    const [searchResults, setSearchResults] = useState([]);
    const [addPanelOpen, setAddPanelOpen] = useState(false);
    const [currentGame, setCurrentGame] = useState({});
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
            <SearchItem key={game.id} game={game} setAddPanelOpen={setAddPanelOpen} setCurrentGame={setCurrentGame}/>
        )
    });
    return (
        <div className="flex flex-col h-full p-4" style={{background:"linear-gradient(73deg, #252525 49%, #4B4B4B)"}}>
            {addPanelOpen && <AddPanel setAddPanelOpen={setAddPanelOpen} game={currentGame}/>}
            <div className="flex flex-col h-full p-2 pb-0 rounded-md overflow-y-scroll search-view">    
                {searchItems}
            </div>
        </div>
    )
}

export default SearchView;