//Library imports
import React from 'react';

//Internal imports
import { LegacyDiv, LegacyHeading } from '../../../../components';
import articleCardDefaultStyle from './styles/articleCardDefaultStyle';
import { headingVariants } from '../../../../types/headingVariants';
import headingContainerStyleProps from './styles/headingContainerStyleProps';
import ArticleInformationLabels from './components/ArticleInformationLabels';
import ArticleInformation from './components/ArticleInformation';

export default (props) => {
  const {
    injectedMethods: {
      receiveArticlesMethod,
      deleteArticleMethod,
      updateArticleStatusMethod,
      receiveArticleMethod,
      createArticleMethod,
    } = {},
    setInjectedContainer,
  } = props;

  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv styleProps={headingContainerStyleProps()}>
        <LegacyHeading text="Posts Table" variant={headingVariants.H2} />
      </LegacyDiv>
      <LegacyDiv
        styleProps={{ ALL_DEVICES: { display: 'block', height: '100%' } }}
      >
        <ArticleInformationLabels />
        <ArticleInformation
          methods={{
            deleteArticleMethod,
            receiveArticlesMethod,
            updateArticleStatusMethod,
            receiveArticleMethod,
            createArticleMethod,
          }}
          setInjectedContainer={setInjectedContainer}
        />
      </LegacyDiv>
    </LegacyDiv>
  );
};
