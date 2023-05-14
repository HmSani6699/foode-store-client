import { Link, Outlet } from "react-router-dom";


const Header = () => {
    return (
        <div className="">
            <nav className="mt-10 mb-10 flex items-center justify-center gap-10">
                <Link to='/home'>Home</Link>
                <Link to='/addFood'>Add Food</Link>
                <Link to='/updateFood/'>Update Food</Link>
            </nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;