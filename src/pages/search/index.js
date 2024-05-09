import SearchView from "@/components/SearchView";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function SearchPage() {
    return (
      <div className="flex flex-col overflow-hidden min-h-screen">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=K2D:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        </style>
        <Header/>
        <div className="flex flex-row" style={{height: '92vh'}}>
          <div className="basis-1/6"><Sidebar/></div>
          <div className="basis-5/6"><SearchView/></div>
        </div>
      </div>
    )
}