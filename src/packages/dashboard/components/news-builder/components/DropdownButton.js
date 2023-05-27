import React from 'react';

import { LegacyButton, LegacyDiv } from '../../../../../components';
import setDropdownMenuProps from './helpers/setDropdownMenuProps';
import dropdownMenuStyleProps from './styles/dropdownMenuStyleProps';
import dropdownButtonStyleProps from './styles/dropdownButtonStyleProps';
import ArticleEditor from './ArticleEditor';
import { useNavigate } from 'react-router-dom';

export default (props) => {
  const {
    setIsFetching,
    methods: {
      deleteArticleMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
      updateArticleMethod,
    } = {},
    methodsParams: { _id, status } = {},
    setInjectedContainer,
  } = props;

  const navigator = useNavigate();

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
            receiveById: () => {
              receiveArticleMethod({
                payload: { id: _id },
                callback: (results) => {
                  if (results.success) {
                    const isPublished = results.data.status === 'published';

                    setIsFetching(true);
                    setInjectedContainer(
                      <ArticleEditor
                        receivedForm={results.data}
                        containerText="Edit article"
                        buttonText="EDIT"
                        injectedMethod={updateArticleMethod}
                        articleId={_id}
                        injectedComponent={
                          isPublished && (
                            <LegacyButton
                              text="EDIT DESIGN"
                              styleProps={{
                                ALL_DEVICES: {
                                  marginTop: 'auto',
                                  width: 'fit-content',
                                  alignSelf: 'end',
                                  color: '#42424a',
                                  border: '1px solid #42424a',
                                  borderRadius: 8,
                                  background: '#FFF',
                                  fontWeight: '700',
                                  transition: 'all 0.15s ease-in',
                                  verticalAlign: 'middle',
                                  fontSize: '14px',
                                  marginRight: '14px',

                                  '&:hover': {
                                    opacity: '0.75',
                                  },
                                },
                              }}
                              onClick={() => navigator(`/edit-design/${_id}`)}
                            />
                          )
                        }
                        injectedMethods={props.methods}
                        setInjectedContainer={setInjectedContainer}
                      />,
                    );
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
