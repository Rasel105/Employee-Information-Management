import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 md:w-24 lg:w-64 h-screen bg-gray-800 text-white flex flex-col">
      <div className="p-6 md:p-4 text-xl md:text-lg font-bold">
        Employee Dashboard
      </div>
      <nav className="mt-10 flex-grow">
        <Link
          href="/dashboard"
          className="block py-2.5 px-4 md:px-2 transition duration-200 hover:bg-gray-700 text-sm md:text-lg"
        >
          Employee Management
        </Link>
      </nav>
      <div className="p-4 text-xs text-center md:text-sm">
        &copy; 2024 SoftyPy
      </div>
    </div>
  );
};

export default Sidebar;
