import dropdownLinksStyleProps from '../styles/dropdownLinksStyleProps';

export default ({ deleteAction, receiveById, changeArticleStatus, status }) => {
  return [
    {
      styleProps: dropdownLinksStyleProps,
      onClick: receiveById,
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
};
