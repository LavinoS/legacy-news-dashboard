import React, { useEffect, useState } from 'react';
import { merge } from 'lodash';

import {
  LegacyButton,
  LegacyDiv,
  LegacyParagraph,
} from '../../../../../components';
import setStatusStyle from './helpers/setStatusStyle';
import informationTextStyleProps from './styles/informationTextStyleProps';
import LoaderSpinner from '../../../../../components/ui/LoaderSpinner';
import articleInformationContainerStyleProps from './styles/articleInformationContainerStyleProps';
import additionalTitleStyleProps from './styles/additionalTitleStyleProps';
import DropdownButton from './DropdownButton';
import ArticleEditor from './ArticleEditor';

export default ({
  methods: {
    deleteArticleMethod,
    receiveArticlesMethod,
    updateArticleStatusMethod,
    receiveArticleMethod,
  } = {},
  setInjectedContainer,
}) => {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    receiveArticlesMethod({
      callback: (result) => {
        setFetchedArticles(result.data);
        setIsFetching(false);
      },
    });
  }, [isFetching]);

  return (
    <LegacyDiv styleProps={articleInformationContainerStyleProps}>
      {isFetching ? (
        <LoaderSpinner />
      ) : (
        fetchedArticles.map(
          ({ title, author, type, publishDate, status, _id }, index) => (
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
                  text={type}
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
                }}
                methodsParams={{ _id, status }}
                setInjectedContainer={setInjectedContainer}
              />
            </LegacyDiv>
          ),
        )
      )}
      <LegacyButton
        styleProps={{
          ALL_DEVICES: {
            marginTop: 'auto',
            width: 'fit-content',
            alignSelf: 'end',
            color: '#e91e63',
            border: '1px solid #e91e63',
            borderRadius: 8,
            background: '#FFF',
            fontWeight: '700',
            transition: 'all 0.15s ease-in',
            verticalAlign: 'middle',
            fontSize: '14px',

            '&:hover': {
              opacity: '0.75',
            },
          },
        }}
        onClick={() => setInjectedContainer(<ArticleEditor />)}
        text="CREATE NEW POST"
      />
    </LegacyDiv>
  );
};
