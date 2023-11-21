import Link from "next/link";

const NavBar = () => {
    return(
        <nav className="flex justify-evenly items-center bg-slate-400">
            <Link className="text-slate-500 hover:text-slate-300 hover:bg-slate-700 py-2 px-3" href='/about'>
                About
            </Link>

            <Link className="text-slate-500 hover:text-slate-300 hover:bg-slate-700 py-2 px-3" href='/'>
                Home
            </Link>

            <Link className="text-slate-500 hover:text-slate-300 hover:bg-slate-700 py-2 px-3" href='/news'>
                Form
            </Link>
        </nav>
    )
}

export default NavBar;