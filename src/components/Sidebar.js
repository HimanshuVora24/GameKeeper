import { useState } from "react";
import styles from "./css/CustomButton.module.css";
import { useRouter } from "next/router";
function Sidebar() {
    const button_class = "hover:bg-emerald-900 bg-emerald-700 rounded-r-md border-2 border-l-0 border-black p-2";
    const sidebar_class = "flex flex-col min-h-full bg-emerald-600 p-4 pl-0 text-2xl justify-between";
    const router = useRouter();
    const currentTab = (router.pathname == '/') ? 0 : 1;
    return(
        <div className="flex flex-col min-h-full p-4 pl-0 text-2xl justify-between"
            style={{backgroundColor:"#252525"}}>
                <div className="flex flex-col">
                    <button className={((currentTab==0) ? 'sidebar_selected' : 'sidebar_button')} onClick={()=> {
                        router.push('/');
                        }}>Profile</button>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <button className="sidebar_button sidebar_completed" style={{width:``}}>Completed</button>
                    <button className="sidebar_button sidebar_finished">Finished</button>
                    <button className="sidebar_button sidebar_ongoing">Ongoing</button>
                    <button className="sidebar_button sidebar_backlog">Backlog</button>
                    <button className="sidebar_button sidebar_dropped">Dropped</button>
                    <button className="sidebar_button sidebar_wishlist">Wishlist</button>
                </div>
                <div className="flex flex-col justify-self-end space-y-1.5">
                    <button className="sidebar_button">Settings</button>
                    <button className="sidebar_button">Logout</button>
                </div>
        </div>
    )
}

export default Sidebar;

