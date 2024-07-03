import { GoArrowUpRight } from "react-icons/go";
const Navbar = () => {
  const items = (
    <>
      <li>
        <a className="text-primary-color text-[16px] font-normal">Home</a>
      </li>
      <li>
        <a className="text-primary-color text-[16px] font-normal">Services</a>
      </li>
      <li>
        <a className="text-primary-color text-[16px] font-normal">Blog</a>
      </li>
      <li>
        <a className="text-primary-color text-[16px] font-normal">About us</a>
      </li>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 p-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
            >
              {items}
            </ul>
          </div>
          <a className="text-xl">
            <img src="./logo.svg" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{items}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn text-[16px] text-primary-color font-medium border-[1px] border-solid border-primary-color rounded-[12px]">
            Appointment{" "}
            <GoArrowUpRight size={16} className="text-primary-color" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
