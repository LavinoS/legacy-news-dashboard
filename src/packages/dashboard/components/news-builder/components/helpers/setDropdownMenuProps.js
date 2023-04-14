import dropdownLinksStyleProps from '../styles/dropdownLinksStyleProps';

export default ({ deleteAction, editAction, changeArticleStatus, status }) => [
  {
    styleProps: dropdownLinksStyleProps,
    onClick: editAction,
    text: 'Edit article',
  },
  {
    styleProps: dropdownLinksStyleProps,
    onClick: deleteAction,
    text: 'Delete article',
  },
  {
    styleProps: dropdownLinksStyleProps,
    onClick: changeArticleStatus,
    text: `${status === 'published' ? 'Unpublish' : 'Publish'} article`,
  },
];
