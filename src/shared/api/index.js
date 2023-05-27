import user from './user';
import articles from './articles';

export default ({ restClient }) => ({
  user: user(restClient),
  articles: articles(restClient),
});
