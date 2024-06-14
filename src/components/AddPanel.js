function AddPanel(props) {
    return (
        <div className="z-10 flex flex-col absolute border-black border-2 rounded-md bg-emerald-900"
            style={{height: "60%", width:"35%", top: "50%", left: "50%", transform:"translate(-50%, -50%)"}}>
            <div className="basis-5/12 border-black m-2 relative rounded-md bg-emerald-600 overflow-hidden border-2">
                <div className="w-full z-20 absolute p-2" 
                    style={{top:"100%", transform:"translate(0%, -100%)"}}>
                    <div className="border-black border-2 rounded-md pl-1 bg-emerald-900">{props.game.name}</div>
                </div>
                {/* <div className="bg-emerald-500 w-full h-full rounded-md"> */}
                    {/* <div className="bg-emerald-600 w-full h-full rounded-md"></div> */}
                <img className="h-full w-full object-cover" src={props.game.cover?.url.replace("t_thumb", "t_screenshot_big")}/>
                {/* </div> */}
            </div>
            <div className="basis-2/12 justify-between flex flex-row m-2 mt-0 mb-0">
                <div className="flex-col" style={{width:"35%"}}>
                    <p>Status</p>
                    <select style={{width:"100%"}} className=" border-black border-2 rounded-md bg-emerald-600">
                        <option>Completed</option>
                        <option>Finished</option>
                        <option>Ongoing</option>
                        <option>Backlog</option>
                        <option>Dropped</option>
                        <option>Wishlist</option>
                    </select>
                </div>
                <div className="flex-col" style={{width:"35%"}} >
                    <p>Score</p>
                    <select style={{width:"100%"}} className=" border-black border-2 rounded-md bg-emerald-600">
                        <option>N/A</option>
                        <option>10: Amazing</option>
                        <option>9: Really good</option>
                        <option>8: Good</option>
                        <option>7: Decent</option>
                        <option>6: Potential</option>
                        <option>5: Mid</option>
                        <option>4: Disappointing</option>
                        <option>3: Bad</option>
                        <option>2: Very Bad</option>
                        <option>1: Terrible</option>
                    </select>
                </div>
                <div className="flex-col" style={{width:"25%"}} >
                    <p>Playtime</p>
                    <input style={{width:"100%"}} className=" border-black border-2 rounded-md bg-emerald-600"></input>
                </div>
            </div>
            {/* <p>Review</p> */}
            <div className="basis-4/12 m-2 mt-0 flex flex-col">
                <div>Review</div>
                <textarea className=" border-black w-full rounded-md bg-emerald-600 resize-none pl-2 flex-1"></textarea>
            </div>
            <div className="basis-1/12 flex justify-end mr-2 pb-2 ">
                <button className="mr-2 border-2 border-black pl-4 pr-4 rounded-md bg-emerald-700" 
                    onClick={()=>props.setAddPanelOpen(false)}>Submit</button>
                <button className="border-2 border-black pl-4 pr-4 rounded-md bg-emerald-700"
                    onClick={()=>props.setAddPanelOpen(false)}>Cancel</button>
            </div>
        </div>
    )
}

export default AddPanel;