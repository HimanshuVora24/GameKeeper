import styles from "./css/CustomButton.module.css";

function Sidebar() {
    const button_class = "hover:bg-emerald-900 bg-emerald-700 rounded-r-md border-2 border-l-0 border-black p-2";
    return(
        <div className="flex flex-col min-h-full bg-emerald-600 p-4 pl-0 pr-8 text-2xl justify-between">
                <div className="flex flex-col">
                    <button className={button_class}>Profile</button>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <button className={button_class}>Completed</button>
                    <button className={button_class}>Finished</button>
                    <button className={button_class}>Ongoing</button>
                    <button className={button_class}>Backlog</button>
                    <button className={button_class}>Dropped</button>
                    <button className={button_class}>Wishlist</button>
                </div>
                <div className="flex flex-col justify-self-end space-y-1.5">
                    <button className={button_class}>Settings</button>
                    <button className={button_class}>Logout</button>
                </div>
        </div>
    )
}

export default Sidebar;

