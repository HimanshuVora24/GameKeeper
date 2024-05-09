import searchGame from "@/utils/IGDBRequest";
import { useEffect, useState } from "react";

function MainView() {
    const [t_5, setT_5] = useState([{},{},{},{},{}]);
    // useEffect(()=>{
    //     searchGame("League").then((res)=>{
    //         setT_5(res);
    //     });
    // },[]);

    var t_5Elem = t_5.map((game, index) => {
        return (
            <div key={(game.id) ? game.id : index} className="flex basis-1/6 bg-gray-600 rounded-xl items-center border-black border-2">
                {/* <img className="rounded-xl object-cover h-full w-full" src={game.cover?.url.replace("t_thumb", "t_cover_big")}/> */}
            </div>
        )
    });

    return (
        <div className="flex min-h-full bg-emerald-600 p-4 pl-0">
            <div className="flex-1 flex flex-col bg-emerald-700 rounded-xl p-4">
                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/5 flex flex-col items-center">
                        <div className="p-2 pt-0">
                            <img className="h-full w-full object-cover border-2 border-black rounded-md" src="/ayanokoji_pfp.jpg"/>
                        </div>
                        <div className="pl-2 border-2 pr-2 rounded-md border-black ">Joined: 19th May 2020</div>
                    </div>
                    <div className="basis-4/6 flex flex-col pl-4">
                        <div style={{flexBasis:"18%"}} className="border-2 text-5xl p-2 w-3/5 border-black rounded-md">Name</div>
                        <div style={{flexBasis:"12%"}} className="flex flex-row mt-2">
                            <div style={{flexBasis:"5%", padding:".25rem"}} className="border-2 border-black rounded-md">
                                <img src="/xboxicon.png"></img>
                            </div>
                        </div>
                        <div style={{flexBasis:"40%"}} className="border-2 text-md p-2 mt-2 border-black rounded-md">
                            Bio: Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla 
                            pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est 
                            laborum.
                        </div>
                        <div style={{flexBasis:"30%"}} className="flex flex-row h-full pt-3">
                            <div className="flex flex-row basis-1/4 h-full border-2 rounded-md border-black ">
                                <div className="basis-1/2 h-full border-r-2 border-black "></div>
                                <div className="basis-1/2 h-full"></div>
                            </div>
                            <div className="flex flex-row basis-3/4 h-full justify-end">
                                <div className="flex flex-col basis-3/4 h-full">
                                    <div className="basis-1/5 flex items-center justify-center border-2 border-r-0 rounded-tl-md border-black ">Games</div>
                                    <div className="basis-5/6 flex flex-row border-l-2 border-b-2 rounded-bl-md border-black ">
                                        <div className="flex basis-1/6 items-center justify-center">1</div>
                                        <div className="flex basis-1/6 items-center justify-center">2</div>
                                        <div className="flex basis-1/6 items-center justify-center">3</div>
                                        <div className="flex basis-1/6 items-center justify-center">4</div>
                                        <div className="flex basis-1/6 items-center justify-center">5</div>
                                        <div className="flex basis-1/6 items-center justify-center">6</div>
                                    </div>
                                </div>
                                <div className="basis-1/6 h-full border-2 rounded-tr-md rounded-br-md border-black "></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex basis-2/5 mt-8 pl-2" style={{width:"85%"}}>
                    <div className="flex flex-row bg-emerald-400 rounded-xl space-x-2 p-2" style={{width:"100%"}}>
                        <div className="basis-1/6">Top 5</div>
                        {t_5Elem}
                    </div>
                </div>
            </div>
        </div>
    )
}

/* <div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div>
<div className="basis-1/6 bg-gray-600 rounded-xl"></div> */
export default MainView;