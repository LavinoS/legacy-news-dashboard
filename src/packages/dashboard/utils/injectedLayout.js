import {
  NewsBuilderContainer,
  OverviewContainer,
  TableContainer,
} from '../components';

export default [
  {
    layoutName: 'dashboard',
    icon: '',
    injectedComponent: OverviewContainer,
  },
  {
    layoutName: 'tables',
    icon: '',
    injectedComponent: TableContainer,
  },
  {
    layoutName: 'News Builder',
    icon: '',
    injectedComponent: NewsBuilderContainer,
  },
];
