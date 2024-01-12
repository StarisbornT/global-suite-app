import Link from "next/link";

export default function Menu() {
  return (
    <nav className="bg-white mx-5 mb-5" style={{ marginLeft: "20%" }}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
            </button>
          </div> */}
          <div className="flex items-center mx-5 justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex">
                <Link
                  href="/"
                  className=" text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  User (Login)
                </Link>
                <Link
                  href="/user-role"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  User Role Profile
                </Link>
                <Link
                  href="/user-level"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  User Level
                </Link>
                <Link
                  href="/level-role"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Level Role Profile
                </Link>
                <Link
                  href="/change-username"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Change Details
                </Link>
                <Link
                  href="/reactivate-user"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Unlock User
                </Link>
                <Link
                  href="/reset-password"
                  className="text-blue-600 hover:text-blue-600 rounded-md px-3 py-2 text-sm font-medium"
                >
                  Reset Password
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href="#"
            className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
            aria-current="page"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Team
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
          >
            Calendar
          </a>
        </div>
      </div>
    </nav>
  );
}
