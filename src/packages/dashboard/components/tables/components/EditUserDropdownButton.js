import React from 'react';
import { LegacyButton } from '../../../../../components';
import dropdownButtonStyleProps from '../../news-builder/components/styles/dropdownButtonStyleProps';
import dropdownMenuStyleProps from '../../news-builder/components/styles/dropdownMenuStyleProps';
import editUserDropdownMenuProps from '../utils/editUserDropdownMenuProps';
import AuthorEditor from './AuthorEditor';

export default (props) => {
  const {
    setIsFetching,
    methods: {
      receiveUserByIdMethod,
      deleteUserMethod,
      receiveUsersMethod,
      editUserByIdMethod,
    } = {},
    methodsParams: { _id } = {},
    setInjectedContainer,
  } = props;

  const userRole = sessionStorage.getItem('role');

  return (
    <LegacyButton
      dropdownConfig={{
        isDropdownButton: true,
        activeMenuStyle: dropdownMenuStyleProps,
        optionsConfig: editUserDropdownMenuProps({
          deleteAction: () =>
            deleteUserMethod({
              payload: { id: _id },
              callback: (results) => {
                if (results.success) {
                  setIsFetching(true);
                }
              },
            }),
          receiveById: () =>
            receiveUserByIdMethod({
              payload: { id: _id },
              callback: (results) => {
                if (results.success) {
                  setIsFetching(true);

                  setInjectedContainer(
                    <AuthorEditor
                      receivedForm={results.user}
                      setInjectedContainer={setInjectedContainer}
                      injectedMethods={{
                        receiveUserByIdMethod,
                        deleteUserMethod,
                        receiveUsersMethod,
                        editUserByIdMethod,
                      }}
                    />,
                  );
                }
              },
            }),
          role: userRole,
        }),
      }}
      styleProps={dropdownButtonStyleProps}
    />
  );
};
