import dropdownLinksStyleProps from '../styles/dropdownLinksStyleProps';

export default ({
  deleteAction,
  receiveById,
  changeArticleStatus,
  status,
  role,
}) => {
  return [
    {
      styleProps: dropdownLinksStyleProps,
      onClick: receiveById,
      text: 'Edit post',
      disabled: ['user'].includes(role),
    },
    {
      styleProps: dropdownLinksStyleProps,
      onClick: deleteAction,
      text: 'Delete post',
      disabled: !['admin'].includes(role),
    },
    {
      styleProps: dropdownLinksStyleProps,
      onClick: changeArticleStatus,
      text: `${status === 'published' ? 'Unpublish' : 'Publish'} post`,
      disabled: ['editor', 'user'].includes(role),
    },
  ];
};
