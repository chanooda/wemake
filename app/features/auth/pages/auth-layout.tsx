import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="grid h-screen grid-cols-2">
      <div className="from-primary to-primary/60 w-full bg-gradient-to-br via-black" />
      <Outlet />
    </div>
  );
};

export default AuthLayout;
