import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className="max-w-[1024px] lg:w-[1024px] mx-auto p-8 flex-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
