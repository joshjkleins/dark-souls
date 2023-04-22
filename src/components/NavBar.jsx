function NavBar({ step }) {
    return(
        <div className="navbar bg-base-300 mb-5">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Dark Souls App</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                <li onClick={() => step('')}><a>Start Over</a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar