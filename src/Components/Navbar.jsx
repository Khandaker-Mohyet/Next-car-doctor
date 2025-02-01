import Image from "next/image";
const { default: Link } = require("next/link")

//                                         


const Navbar = () => {

  const NavMenu =()=> {
    return (
      <>
        <Link href={"/"}><li><a>Home</a></li></Link>
        <Link href={"/about"}><li><a>About</a></li></Link>
        <Link href={"/services"}><li><a>Services</a></li></Link>
        <Link href={"/blog"}><li><a>Blog</a></li></Link>
        <Link href={"/contact"}><li><a>Contact</a></li></Link>
      </>
      
    )
  }


  return (
    <div className="navbar bg-base-100">
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
            {NavMenu()}
          </ul>
        </div>
        <Link href={"/"} className=" text-xl">
          <Image
            src="/assets/logo.svg"
            width={50}
            height={50}
            alt="brand logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {
            NavMenu()
          }
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;