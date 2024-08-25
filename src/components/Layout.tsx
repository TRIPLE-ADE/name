import { ReactNode } from "react";
import { Sidebar } from "./";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Sidebar />
      <main className="px-4 lg:px-12 font-sans ml-auto 2xl:ml-72 w-full md:w-[calc(100%-289px)] pt-12 md:pt-0 bg-slate-50 pb-10">
        <div className="max-w-[100rem]">{children}</div>
      </main>
    </>
  );
};

export default Layout;
