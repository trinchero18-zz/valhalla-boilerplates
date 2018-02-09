import React from 'react';

import { Header } from '../../components/Header';
import Sidebar from '../../components/Sidebar';

export const App = (props) => (
  <div>
    <Header />
    <Sidebar />
    { props.children }
  </div>
);