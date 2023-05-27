import React from 'react';
import { MdDashboard, MdTableView } from 'react-icons/md';
import { SiVirtualbox } from 'react-icons/si';

import {
  NewsBuilderContainer,
  OverviewContainer,
  TableContainer,
} from '../components';

export default [
  {
    layoutName: 'dashboard',
    icon: (props) => <MdDashboard {...props} />,
    injectedComponent: (props) => <OverviewContainer {...props} />,
  },
  {
    layoutName: 'tables',
    icon: (props) => <MdTableView {...props} />,
    injectedComponent: (props) => <TableContainer {...props} />,
  },
  {
    layoutName: 'News Builder',
    icon: (props) => <SiVirtualbox {...props} />,
    injectedComponent: (props) => <NewsBuilderContainer {...props} />,
  },
];
