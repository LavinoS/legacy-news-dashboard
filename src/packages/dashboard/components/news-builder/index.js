//Library imports
import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

//Internal imports
import { LegacyButton, LegacyDiv, LegacyHeading } from '../../../../components';
import articleCardDefaultStyle from './styles/articleCardDefaultStyle';
import { headingVariants } from '../../../../types/headingVariants';
import headingContainerStyleProps from './styles/headingContainerStyleProps';
import ArticleInformationLabels from './components/ArticleInformationLabels';
import ArticleInformation from './components/ArticleInformation';
import CustomFilter from '../../../../components/ui/CustomFilter';
import newsFilterConfiguration from './utils/newsFilterConfiguration';
import CustomPagination from '../../../../components/ui/CustomPagination';
import ArticleEditor from './components/ArticleEditor';

export default (props) => {
  const {
    injectedMethods: {
      receiveArticlesMethod,
      deleteArticleMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
      createArticleMethod,
      updateArticleMethod,
    } = {},
    setInjectedContainer,
  } = props;

  const [fetchedEntities, setFetchEntities] = useState({
    fetchedInformation: [],
    fetchedArticles: [],
    totalArticles: 0,
  });
  const [isFetching, setIsFetching] = useState(true);
  const [articleFilters, setArticleFilters] = useState({});
  const [pageCount, setPageCount] = useState(1);
  const [resetFilters, setResetFilters] = useState(false);

  const { fetchedInformation, fetchedArticles, totalArticles } =
    fetchedEntities;

  const handleResetFilters = () => {
    setResetFilters(true);
  };

  useEffect(() => {
    if (!isEmpty(articleFilters)) {
      receiveArticlesMethod({
        params: { ...articleFilters, page: pageCount },
        callback: (result) => {
          if (result.success) {
            setFetchEntities({
              fetchedArticles: result.data,
              fetchedInformation: result.filters,
              totalArticles: result.total,
            });

            setIsFetching(false);
          }
        },
      });
    }
  }, [isFetching, articleFilters, pageCount]);

  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv styleProps={headingContainerStyleProps()}>
        <LegacyHeading text="Posts Table" variant={headingVariants.H2} />
      </LegacyDiv>
      <CustomFilter
        containerStyleProps={{
          ALL_DEVICES: { flexDirection: 'column', height: '100%' },
        }}
        fetchedData={fetchedInformation}
        filterContainerStyleProps={{
          ALL_DEVICES: {
            display: 'grid',
            gridTemplateRows: '1fr',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gridColumnGap: '20px',
            padding: '20px 0',
            marginBottom: '20px',
          },
        }}
        filterConfiguration={newsFilterConfiguration}
        setFilters={setArticleFilters}
        setIsFetching={setIsFetching}
        resetFilters={resetFilters}
        setResetFilters={setResetFilters}
      >
        <ArticleInformationLabels />
        <ArticleInformation
          methods={{
            deleteArticleMethod,
            receiveArticlesMethod,
            updateArticleStatusMethod,
            receiveArticleMethod,
            createArticleMethod,
            updateArticleMethod,
          }}
          setInjectedContainer={setInjectedContainer}
          fetchedArticles={fetchedArticles}
          fetching={isFetching}
          setIsFetching={setIsFetching}
        />
        <LegacyDiv
          styleProps={{
            ALL_DEVICES: {
              justifyContent: 'space-between',
              marginTop: '24px',
            },
          }}
        >
          <CustomPagination
            currentPage={pageCount}
            onPageChange={(page) => setPageCount(page)}
            totalCount={totalArticles}
            pageSize={articleFilters.limit}
          />
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: {
                width: 'fit-content',
              },
            }}
          >
            <LegacyButton
              styleProps={{
                ALL_DEVICES: {
                  width: 'fit-content',
                  color: '#e91e63',
                  border: '1px solid #e91e63',
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
              onClick={handleResetFilters}
              text="RESET FILTERS"
            />
            <LegacyButton
              styleProps={{
                ALL_DEVICES: {
                  width: 'fit-content',
                  color: '#FFF',
                  border: '1px solid #e91e63',
                  borderRadius: 8,
                  backgroundImage:
                    'linear-gradient(195deg, #EC407A 0%, #D81B60 100%)',
                  fontWeight: '700',
                  verticalAlign: 'middle',
                  fontSize: '14px',
                  boxShadow:
                    '0 3px 3px 0 rgb(233 30 99 / 15%), 0 3px 1px -2px rgb(233 30 99 / 20%), 0 1px 5px 0 rgb(233 30 99 / 15%)',
                  transition: 'all 0.15s ease-in',

                  '&:hover': {
                    backgroundColor: '#e91e63',
                    boxShadow:
                      '0 14px 26px -12px rgb(233 30 99 / 40%), 0 4px 23px 0 rgb(233 30 99 / 15%), 0 8px 10px -5px rgb(233 30 99 / 20%)',
                  },
                },
              }}
              onClick={() =>
                setInjectedContainer(
                  <ArticleEditor
                    injectedMethod={createArticleMethod}
                    setInjectedContainer={setInjectedContainer}
                    {...props}
                  />,
                )
              }
              text="CREATE NEW POST"
            />
          </LegacyDiv>
        </LegacyDiv>
      </CustomFilter>
    </LegacyDiv>
  );
};
