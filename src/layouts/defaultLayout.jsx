import { Outlet } from "react-router";

function DefaultLayout() {
  return (
    <div>
      <div>레이아웃</div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default DefaultLayout;
