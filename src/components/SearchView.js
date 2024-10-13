import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";
import SearchItem from "./SearchItem";
import tempGameData from "./TempData";
import AddPanel from "./AddPanel";
import { useRouter } from "next/router";
function SearchView() {
    const [searchResults, setSearchResults] = useState([]);
    const [addPanelOpen, setAddPanelOpen] = useState(false);
    const [currentGame, setCurrentGame] = useState({});
    //const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    var searchQuery = router.query.q; 
    console.log("Search view Rerender");
    useEffect(()=>{
        if (!router.isReady) return;
        let query = sessionStorage.getItem("searchQuery");
        //setSearchQuery("among");
        if (!query) query = ""; 
        // searchGame(query).then((res)=>{
        //     setSearchResults(res);
        // });
        setSearchResults(tempGameData);
    },[router.isReady]);

    var searchItems = searchResults.map((game) => {
        return (
            <SearchItem key={game.id} game={game} setAddPanelOpen={setAddPanelOpen} setCurrentGame={setCurrentGame}/>
        )
    });
    return (
        <div className="flex flex-col h-full p-4" style={{background:"linear-gradient(73deg, #252525 49%, #4B4B4B)"}}>
            {addPanelOpen && <AddPanel setAddPanelOpen={setAddPanelOpen} game={currentGame}/>}
            <div className="pl-2 border-black border-b-2" 
                style={{fontFamily:"K2D"}}>Search Results for: {searchQuery}</div>
            <div className="flex flex-col h-full p-2 pb-0 rounded-md overflow-y-scroll search-view">    
                {searchItems}
            </div>
        </div>
    )
}

export default SearchView;