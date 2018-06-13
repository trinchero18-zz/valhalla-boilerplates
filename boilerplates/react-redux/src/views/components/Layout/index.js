import { Header } from '../Header';
import { Sidebar } from '../Sidebar';

import { any } from 'prop-types';
import React, { Fragment } from 'react';

export const Layout = ({ children }) => (
    <Fragment>
        <Header />
        <Sidebar />
        { children }
    </Fragment>
);

Layout.propTypes = {
    children: any
};

Layout.displayName = 'Layout';
