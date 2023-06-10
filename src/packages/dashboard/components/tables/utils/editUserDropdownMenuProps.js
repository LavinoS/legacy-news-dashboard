import dropdownLinksStyleProps from '../../news-builder/components/styles/dropdownLinksStyleProps';

export default ({ deleteAction, receiveById, role }) => {
  return [
    {
      styleProps: dropdownLinksStyleProps,
      onClick: receiveById,
      text: 'Edit user',
      disabled: !['admin'].includes(role),
    },
    {
      styleProps: dropdownLinksStyleProps,
      onClick: deleteAction,
      text: 'Delete user',
      disabled: !['admin'].includes(role),
    },
  ];
};
