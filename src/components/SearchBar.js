import { useRouter } from "next/router";
import { useState } from "react"

export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();
    const search = () => {
        sessionStorage.setItem("searchQuery", searchQuery);
        router.push('/search')
    }
    return (
        <div className="flex basis-1/2 text-2xl">
            <input 
                className="rounded-md rounded-r-none bg-emerald-800	w-10/12 focus:bg-emerald-900 h-10 pl-2 pr-2"
                onChange={(event)=>setSearchQuery(event.target.value)}
                value={searchQuery}
            />
            <button 
                className="rounded-md rounded-l-none pl-2 pr-2 
                bg-emerald-600 h-10 hover:bg-emerald-500" 
                onClick={search}
            >Go</button>
        </div>
    )
}