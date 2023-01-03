import user from './user';

export default ({ restClient }) => ({
  user: user(restClient),
});
