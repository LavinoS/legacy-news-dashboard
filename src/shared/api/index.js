import user from './user';
import articles from './articles';
import statistics from './statistics';

export default ({ restClient }) => ({
  user: user(restClient),
  articles: articles(restClient),
  statistics: statistics(restClient),
});
