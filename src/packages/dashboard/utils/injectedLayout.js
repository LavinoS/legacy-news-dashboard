import React from 'react';

import {
  NewsBuilderContainer,
  OverviewContainer,
  TableContainer,
} from '../components';

export default [
  {
    layoutName: 'dashboard',
    icon: '',
    injectedComponent: (props) => <OverviewContainer {...props} />,
  },
  {
    layoutName: 'tables',
    icon: '',
    injectedComponent: (props) => <TableContainer {...props} />,
  },
  {
    layoutName: 'News Builder',
    icon: '',
    injectedComponent: (props) => <NewsBuilderContainer {...props} />,
  },
];
