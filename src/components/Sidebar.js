
function Sidebar() {
    return(
        <div className="flex min-h-full bg-emerald-600 p-4 pl-0 text-2xl">
            <div className="flex-1 flex flex-col bg-emerald-700 rounded-r-xl justify-between pt-4 pb-4">
                <div className="flex flex-col">
                    <button>Profile</button>
                </div>
                <div className="flex flex-col space-y-1.5">
                    <button className="hover:bg-emerald-900">Current</button>
                    <button>Backlog</button>
                    <button>Wishlist</button>
                </div>
                <div className="flex flex-col justify-self-end space-y-1.5">
                    <button>Settings</button>
                    <button>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;

