import styles from "./css/CustomButton.module.css";

function Sidebar() {
    const button_class = "hover:bg-emerald-900 bg-emerald-700 rounded-r-md border-2 border-l-0 border-black p-2";
    return(
        <div className="flex flex-col min-h-full bg-emerald-600 p-4 pl-0 text-2xl justify-between">
                <div className="flex flex-col">
                    <button className="sidebar_button">Profile</button>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <button className="sidebar_button sidebar_completed">Completed</button>
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

