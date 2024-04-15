import SearchView from "@/components/SearchView";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function SearchPage() {
    return (
      <div className="flex flex-col overflow-hidden min-h-screen">
        <Header/>
        <div className="flex flex-row" style={{height: '92vh'}}>
          <div className="basis-1/6"><Sidebar/></div>
          <div className="basis-5/6"><SearchView/></div>
        </div>
      </div>
    )
}