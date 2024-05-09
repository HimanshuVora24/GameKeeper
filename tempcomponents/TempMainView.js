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
            <div key={(game.id) ? game.id : index} className="flex basis-1/6 bg-gray-600 rounded-xl items-center">
                <img className="rounded-xl object-cover h-full w-full" src={game.cover?.url.replace("t_thumb", "t_cover_big")}/>
            </div>
        )
    });

    return (
        <div className="flex min-h-full bg-emerald-600 p-4 pl-0">
            <div className="flex-1 flex flex-col bg-emerald-700 rounded-xl p-4">
                <div className="flex flex-row basis-1/2">
                    <div className="basis-1/4 border-2">Picture</div>
                    <div className="basis-3/4 flex flex-col">
                        <div className="basis-1/3 border-2 text-5xl p-2">Name</div>
                        <div className="basis-2/3 border-2 text-lg p-2">
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
                    </div>
                </div>
                <div className="flex basis-1/2 border-2 p-4">
                    <div className="flex flex-row bg-emerald-400 flex-1 rounded-xl space-x-2 p-2">
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