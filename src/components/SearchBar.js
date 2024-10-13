import { useRouter } from "next/router";
import { useState } from "react"

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const search = () => {
        sessionStorage.setItem("searchQuery", searchQuery);
        router.push({ 
            pathname: '/search',
            query: {q: searchQuery}
        });
    }
    return (
        <div className="flex basis-1/2 text-2xl">
            <select className="bg-gray-600 h-10 rounded-md rounded-r-none pl-2 pb-1" style={{fontFamily:"K2D", fontSize:"80%"}}>
                <option>Games</option>
                <option>Users</option>
                <option>Studios</option>
            </select>
            <input 
                className="w-10/12 focus:bg-emerald-900 h-10 pl-2 pr-2"
                style={{backgroundColor:"#88918B", boxShadow:"inset 0px 4px 4px rgba(0,0,0,.25)"}}
                onChange={(event)=>setSearchQuery(event.target.value)}
                value={searchQuery}
            />
            <button 
                className="rounded-md rounded-l-none pl-2 pr-2 
                bg-gray-600 h-10 hover:bg-gray-500" 
                onClick={search}
            >Go</button>
        </div>
    )
}