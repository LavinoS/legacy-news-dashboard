import React from 'react';
import { merge } from 'lodash';
import capitalize from 'lodash/capitalize';

import { LegacyDiv, LegacyParagraph } from '../../../../../components';
import setStatusStyle from './helpers/setStatusStyle';
import informationTextStyleProps from './styles/informationTextStyleProps';
import LoaderSpinner from '../../../../../components/ui/LoaderSpinner';
import articleInformationContainerStyleProps from './styles/articleInformationContainerStyleProps';
import additionalTitleStyleProps from './styles/additionalTitleStyleProps';
import DropdownButton from './DropdownButton';

export default (props) => {
  const {
    methods: {
      deleteArticleMethod,
      receiveArticlesMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
      createArticleMethod,
      updateArticleMethod,
    } = {},
    setInjectedContainer,
    fetching,
    fetchedArticles,
    setIsFetching,
  } = props;

  return (
    <LegacyDiv styleProps={articleInformationContainerStyleProps}>
      {fetching ? (
        <LoaderSpinner />
      ) : (
        fetchedArticles.map(
          ({ title, author, category, publishDate, status, _id }, index) => (
            <LegacyDiv
              key={index}
              styleProps={{
                ALL_DEVICES: {
                  padding: '12px 0',
                  borderTop: '1px solid #E8E8E8',
                },
              }}
            >
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '30%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={title}
                  styleProps={merge(
                    informationTextStyleProps,
                    additionalTitleStyleProps,
                  )}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '20%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={author}
                  styleProps={informationTextStyleProps}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={capitalize(category)}
                  styleProps={informationTextStyleProps}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={publishDate}
                  styleProps={informationTextStyleProps}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={status}
                  styleProps={setStatusStyle(status)}
                />
              </LegacyDiv>
              <DropdownButton
                setIsFetching={setIsFetching}
                methods={{
                  deleteArticleMethod,
                  updateArticleStatusMethod,
                  receiveArticleMethod,
                  updateArticleMethod,
                  receiveArticlesMethod,
                  createArticleMethod,
                }}
                methodsParams={{ _id, status }}
                setInjectedContainer={setInjectedContainer}
              />
            </LegacyDiv>
          ),
        )
      )}
    </LegacyDiv>
  );
};
