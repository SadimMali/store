import { Link, Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="flex items-center justify-center bg-gray-100 min-h-screen relative px-8">
      <div className="absolute left-1 top-12 md:left-4 md:top-4">
        <Link to="/">Home</Link>
      </div>
      <div className="w-full max-w-md p-8 space-y-8 bg-white shadow-md">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayout;
