import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./nav_bar/nav_bar";
import ShowLoader from "src/component/ui/show_loader";

function RootLayout() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<ShowLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default RootLayout;
