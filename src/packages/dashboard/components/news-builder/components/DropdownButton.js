import React from 'react';

import { LegacyButton, LegacyDiv } from '../../../../../components';
import setDropdownMenuProps from './helpers/setDropdownMenuProps';
import dropdownMenuStyleProps from './styles/dropdownMenuStyleProps';
import dropdownButtonStyleProps from './styles/dropdownButtonStyleProps';
import ArticleEditor from './ArticleEditor';

export default (props) => {
  const {
    setIsFetching,
    methods: {
      deleteArticleMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
    } = {},
    methodsParams: { _id, status } = {},
    setInjectedContainer,
  } = props;

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: { width: '15%', justifyContent: 'start' },
      }}
    >
      <LegacyButton
        dropdownConfig={{
          isDropdownButton: true,
          optionsConfig: setDropdownMenuProps({
            deleteAction: () =>
              deleteArticleMethod({
                payload: { id: _id },
                callback: (results) => {
                  if (results.success) {
                    setIsFetching(true);
                  }
                },
              }),
            editAction: () => {
              receiveArticleMethod({
                payload: { id: _id },
                callback: (results) => {
                  if (results.success) {
                    setIsFetching(true);
                    setInjectedContainer(<ArticleEditor {...results.data} />);
                  }
                },
              });
            },
            changeArticleStatus: () =>
              updateArticleStatusMethod({
                payload: { id: _id },
                callback: (results) => {
                  if (results.success) {
                    setIsFetching(true);
                  }
                },
              }),
            status,
          }),
          activeMenuStyle: dropdownMenuStyleProps,
        }}
        styleProps={dropdownButtonStyleProps}
      />
    </LegacyDiv>
  );
};
