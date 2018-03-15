import React, { Fragment } from "react";

import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

export const Layout = (props) => (
  <Fragment>
    <Header />
    <Sidebar />
    {props.children}
  </Fragment>
);

Layout.displayName = 'Layout';