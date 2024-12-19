import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const Header = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);
  const links = <>
    <li><NavLink  to='/'
    className={({ isActive }) =>
      isActive
        ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
        : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
    }
          >Home</NavLink></li>
    <li><NavLink to='/donationcompaign'
         className={({ isActive }) =>
          isActive
            ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
            : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
        }
          >Donation Compaigns</NavLink></li>
    <li><NavLink to='/help'
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
          : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
      }
          >How to Help</NavLink></li>
    <li><NavLink to='/dashboard'
      className={({ isActive }) =>
        isActive
          ? "text-blue-500 border-b-2 border-blue-500 bg-transparent"
          : "text-gray-700 hover:border-b-2 hover:border-blue-500 bg-transparent"
      }
          >Dashboard</NavLink></li>
  </>
  return (
    <>
      <div className="bg-base-100 sticky top-0 z-[1000] bg-transparent backdrop-blur-xl">
        <nav className="w-11/12 mx-auto py-4">
          <div className="navbar ">
            <div className="navbar-start">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                  {links }
                </ul>
              </div>
              <img className="w-16 h-16" src="https://img.icons8.com/?size=160&id=XTHoiD6yKX9A&format=png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                {links}

              </ul>
            </div>
            <div className="navbar-end space-x-2">
              <div>
                {
                  user && user?.email ? <img
                    className="h-12 w-12 rounded-full"
                    src={user.photoURL}></img> : ''
                }
              </div>
              <div>
                {
                  user && user?.email ? (

                    <button onClick={signOutUser} className="btn bg-blue-400 text-lg text-white font-semibold">Logout</button>) :
                    (<Link to='/auth/login' className="btn bg-blue-400 text-lg text-white font-semibold">Login</Link>)
                }
              </div>
            </div>
          </div>


        </nav>
      </div>
    </>

  );
};

export default Header;