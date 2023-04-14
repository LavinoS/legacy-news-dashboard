//Library imports
import React from 'react';

//Internal imports
import { LegacyDiv, LegacyHeading } from '../../../../components';
import articleCardDefaultStyle from './styles/articleCardDefaultStyle';
import { headingVariants } from '../../../../types/headingVariants';
import headingContainerStyleProps from './styles/headingContainerStyleProps';
import ArticleInformationLabels from './components/ArticleInformationLabels';
import ArticleInformation from './components/ArticleInformation';

const mokedArticle = [
  {
    objectId: '62fc93485cca1d5cf7b983e6',
    title: 'ceva sadasdasdas asdjdahsdbhasdbhas dashdbahsdhasbdas',
    summary: 'csdnasdnasjndkjasdas dasjkdnaskjdnaksd askjdnkasd',
    slug: 'ceva-test',
    author: 'skema tz',
    featuredImage: 'imagine',
    altText: 'imagine',
    status: 'published',
    type: 'blog-post',
    publishDate: '25.03.2023',
    category: 'sports',
    sections: [],
  },
  {
    objectId: '62fc93485cca1d5cf7b983e6',
    title: 'ceva test',
    summary: 'csdnasdnasjndkjasdas dasjkdnaskjdnaksd askjdnkasd',
    slug: 'ceva-test',
    author: 'skema tz',
    featuredImage: 'imagine',
    altText: 'imagine',
    status: 'draft',
    type: 'news',
    publishDate: '25.03.2023',
    sections: [],
  },
  {
    objectId: '62fc93485cca1d5cf7b983e6',
    title: 'ceva test',
    summary: 'csdnasdnasjndkjasdas dasjkdnaskjdnaksd askjdnkasd',
    slug: 'ceva-test',
    author: 'skema tz',
    featuredImage: 'imagine',
    altText: 'imagine',
    status: 'draft',
    type: 'blog-post',
    category: 'sports',
    publishDate: '25.03.2023',
    sections: [],
  },
];

export default () => {
  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv styleProps={headingContainerStyleProps}>
        <LegacyHeading text="Posts Table" variant={headingVariants.H2} />
      </LegacyDiv>
      <LegacyDiv styleProps={{ ALL_DEVICES: { display: 'block' } }}>
        <ArticleInformationLabels />
        <ArticleInformation articles={mokedArticle} />
      </LegacyDiv>
    </LegacyDiv>
  );
};
