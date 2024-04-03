import Image from "next/image";
import SearchBar from "./SearchBar";

function Header() {
    return (
        <div className="flex flex-row items-center bg-emerald-700 p-2" style={{height: '8vh'}}>
            <div className="basis-1/6 text-2xl">Logo</div>
            <SearchBar/>
            <div className="basis-1/3 text-2xl hover:bg-emerald-900 cursor-default">Menus</div>
        </div>
    );
}

export default Header;