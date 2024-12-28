import { Link } from "react-router";
import { Icon } from "@iconify/react";

const NavbarNav = () => {
  // Simulate user authentication state
  const user = null;

  const cartStyle =
    "rounded-full flex items-center justify-center p-1.5 hover:bg-gray-200 transition-all";

  return (
    <nav className="sticky top-0 w-full h-14 px-10 py-3 flex items-center bg-white shadow-md ">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div>
          <Link to="/" className="text-lg font-bold">
            e.com
          </Link>
        </div>

        {/* Cart & User */}
        <div className="flex items-center gap-2">
          {/* Wishlist */}
          <Link to="/wishlist" className={cartStyle}>
            <Icon icon="mynaui:heart" width="26" height="26" />
          </Link>
          {/* Cart */}
          <Link to="/cart" className={cartStyle}>
            <Icon icon="bi:bag" width="22" height="22" />
          </Link>

          {/* User Section */}
          {user ? (
            <Link to="/profile" className={cartStyle}>
              <Icon icon="hugeicons:user" width="24" height="24" />
            </Link>
          ) : (
            <div className="flex items-center gap-4">
              <Link to="/join-us">
                <button>Join Us</button>
              </Link>
              <Link to="/sign-in">
                <button>Sign In</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarNav;
