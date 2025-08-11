// import { useSelector } from "react-redux";
// import { NavbarLinks } from "../../assets/data/navbar-links"
// import logo from "../../assets/vite.svg"
// import { Link, useLocation, matchPath } from "react-router-dom"
// import ProfileDropDown from "../Auth/ProfileDropDown";

// function Navbar(){

//     const {token} = useSelector((state)=>state.auth);
//     const {user} = useSelector((state)=>state.profile);



//     const location  = useLocation();
//     const matchRoute = (route) => {
//         return matchPath({ path: route }, location.pathname)
//     }
//     return (
//         <div className="flex h-14 items-center justify-center border-b-[1px] border-b-richblack-700 bg-richblack-600">
//             <div className="flex w-11/12 max-w-maxContent items-center justify-between">
//                 <Link to="/">
//                     <div className="flex items-center gap-2">
//                     <img src={logo} alt="Logo" width={50} height={24} loading="lazy"/>
//                     <span className="text-white text-md lg:3xl font-extrabold">Feed for life </span>
//                     </div>
//                 </Link>

//                 {/* {navlinks} */}
//                 <nav>
//                     <ul className="flex gap-x-6 text-richblack-25">
//                         {NavbarLinks.map((link,index)=>(
//                             <li key={index}>
//                                 <Link to={link?.path}>
//                                     <p
//                                     className={`font-semibold transition duration-300 ${
//                                         matchRoute(link?.path)
//                                         ? "text-pink-200 bg-richblack-800 text-center p-[15px]"
//                                         : "text-richblack-25 text-center p-[15px]"
//                                     }`}
//                                     >
//                                     {link.title}
//                                     </p>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </nav>

//                 {/* {Login/signup/profile} */}
//                 <div className="hidden items-center gap-x-4 md:flex">
//                         {
//                             token===null && (
//                                 <Link to={"/login"}>
//                                     <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 font-bold">Log in</button>
//                                 </Link>
//                             )
//                         }
//                         {
//                             token===null && (
//                                 <Link to={"/signup"}>
//                                     <button className="rounded-[8px] border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-25 font-bold">Sign up</button>
//                                 </Link>
//                             )
//                         }
//                         {
//                             token!==null && (
//                                 <ProfileDropDown/>
//                             )
//                         }


//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Navbarimport { useSelector } from "react-redux";
import { NavbarLinks } from "../../assets/data/navbar-links";
import logo from "../../assets/vite.svg";
import { Link, useLocation, matchPath } from "react-router-dom";
import ProfileDropDown from "../Auth/ProfileDropDown";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icon package like lucide-react
import { useSelector } from "react-redux";

function Navbar() {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.profile);
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const matchRoute = (route) => matchPath({ path: route }, location.pathname);

  return (
    <div className="flex h-14 items-center justify-center border-b border-richblack-700 bg-richblack-600">
      <div className="flex w-11/12 max-w-maxContent items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" width={40} height={24} loading="lazy" />
            <span className="text-white text-lg font-extrabold">Feed for life</span>
          </div>
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} color="white" /> : <Menu size={24} color="white" />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link to={link?.path}>
                  <p
                    className={`font-semibold transition duration-300 px-4 py-2 rounded ${
                      matchRoute(link?.path)
                        ? "text-pink-200 bg-richblack-800"
                        : "text-richblack-25"
                    }`}
                  >
                    {link.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Auth Buttons/Profile - Desktop */}
        <div className="hidden items-center gap-x-4 md:flex">
          {!token && (
            <>
              <Link to="/login">
                <button className="rounded-md border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-25 font-bold">Log in</button>
              </Link>
              <Link to="/signup">
                <button className="rounded-md border border-richblack-700 bg-richblack-800 px-3 py-2 text-richblack-25 font-bold">Sign up</button>
              </Link>
            </>
          )}
          {token && <ProfileDropDown />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 left-0 w-full bg-richblack-800 px-4 py-4 z-50 md:hidden">
          <ul className="flex flex-col gap-4">
            {NavbarLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md ${
                    matchRoute(link.path)
                      ? "bg-pink-200 text-richblack-800"
                      : "text-richblack-25"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}

            {!token && (
              <>
                <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full rounded-md border border-richblack-700 bg-richblack-600 px-4 py-2 text-white font-semibold">Log in</button>
                </Link>
                <Link to="/signup" onClick={() => setIsMobileMenuOpen(false)}>
                  <button className="w-full rounded-md border border-richblack-700 bg-richblack-600 px-4 py-2 text-white font-semibold">Sign up</button>
                </Link>
              </>
            )}
            {token && <ProfileDropDown />}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
