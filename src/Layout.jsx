import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <div className="header">
        <h1>Header</h1>
      </div>
      <Outlet />
      <div className="footer">Footer</div>
    </>
  );
}
