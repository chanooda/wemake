import { Outlet } from 'react-router';
import { FlickeringGrid } from '~/common/components/ui/flickering-grid';

const AuthLayout = () => {
 return (
  <div className="grid h-screen grid-cols-1 xl:grid-cols-2">
   <FlickeringGrid className="hidden w-full xl:block" color="#00c951e6" />
   <Outlet />
  </div>
 );
};

export default AuthLayout;
