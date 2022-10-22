import { useState } from "react";
import Link from "next/link";

const links = [
  {
    label: `Posts`,
    href: `/posts`,
  },
  {
    label: `Projects`,
    href: `/projects`,
  },
  {
    label: `Stats`,
    href: `/stats`,
  },
];

const secondaryLinks = [
  {
    label: `Sign out`,
    href: `#`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className="p-2 text-gray-400"
  >
    <span className="sr-only">Open menu</span>
    {showMenu ? (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map(({ label, href }) => (
        <Link key={label} href={href}>
          <a className="text-gray-500 block px-3 py-2 text-base font-medium hover:bg-gray-200 hover:rounded-md">
            {label}
          </a>
        </Link>
      ))}
    </div>
    <div className="pt-4 pb-3 border-t border-gray-400">
      <div className="px-2 space-y-1">
        {secondaryLinks.map(({ label, href }) => (
          <Link key={label} href={href}>
            <a className="block px-3 py-2 text-base font-medium text-gray-500 hover:bg-gray-200 hover:rounded-md">
              {label}
            </a>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href="/"
                title=""
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img
                  className="w-auto h-8 cursor-pointer"
                  src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                  alt=""
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex space-x-4">
                {links.map(({ label, href }) => (
                  <Link key={label} href={href}>
                    <a className="text-gray-500 hover:text-gray-600 px-3 py-2 rounded-md font-medium">
                      {label}
                    </a>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="hidden md:ml-auto sm:flex md:items-center md:space-x-4 xl:space-x-6">
              <Link href="#" title="">
                <a className="px-5 py-2 text-base font-bold leading-7 text-black transition-all duration-200 bg-gray-100 border rounded-xl hover:bg-gray-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  Sign out
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
}
