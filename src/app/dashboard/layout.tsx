import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <h2>
        Dashboard Layout is here and is fixed, it's feels great to use
        composition after some time
      </h2>
      {children}
    </div>
  );
};

export default Layout;
