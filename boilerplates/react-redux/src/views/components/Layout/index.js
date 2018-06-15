import { any } from 'prop-types';
import React, { Fragment } from 'react';

export const Layout = ({ children }) => (
    <Fragment>
        { children }
    </Fragment>
);

Layout.propTypes = {
    children: any
};

Layout.displayName = 'Layout';
