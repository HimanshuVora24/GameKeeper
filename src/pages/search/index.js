import SearchView from "@/components/SearchView";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function SearchPage() {
    return (
      <div className="flex flex-col h-full overflow-hidden">
        <Header/>
        <div className="flex-1 flex flex-row h-full overflow-hidden">
          <div className="basis-1/6"><Sidebar/></div>
          <div className="basis-5/6"><SearchView/></div>
        </div>
      </div>
    )
}