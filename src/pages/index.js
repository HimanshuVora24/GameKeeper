import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MainView from "@/components/MainView";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1 flex flex-row overflow-hidden">
        <div className="basis-1/6"><Sidebar/></div>
        <div className="basis-5/6"><MainView/></div>
      </div>
    </div>
  );
}
