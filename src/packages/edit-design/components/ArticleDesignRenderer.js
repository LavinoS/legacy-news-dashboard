import React, { useContext } from 'react';

import {
  Breadcrumbs,
  LegacyDiv,
  LegacyHeading,
  LegacyParagraph,
  Spacer,
} from '../../../components';
import { headingVariants } from '../../../types/headingVariants';
import articleRendererMainContainerStyleProps from './styles/articleRendererMainContainerStyleProps';
import featuredImageContainerStyleProps from './styles/featuredImageContainerStyleProps';
import informationContainerStyleProps from './styles/informationContainerStyleProps';
import titleContainerStyleProps from './styles/titleContainerStyleProps';
import titleStyleProps from './styles/titleStyleProps';
import publishDateStyleProps from './styles/publishDateStyleProps';
import ComponentFactory from '../../../context/ComponentFactory';

export default (props) => {
  const {
    article: { featuredImage, title, publishDate, alt } = {},
    sections,
    isDesignMode = false,
  } = props;

  const PresetsRenderer = useContext(ComponentFactory);

  return (
    <LegacyDiv styleProps={articleRendererMainContainerStyleProps}>
      <LegacyDiv styleProps={featuredImageContainerStyleProps}>
        <img
          src={featuredImage}
          alt={alt}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <LegacyDiv styleProps={informationContainerStyleProps}>
          <LegacyDiv styleProps={titleContainerStyleProps}>
            <LegacyHeading
              text={title}
              variant={headingVariants.H1}
              styleProps={titleStyleProps}
            />
            <LegacyParagraph
              text={publishDate}
              styleProps={publishDateStyleProps}
            />
          </LegacyDiv>
        </LegacyDiv>
      </LegacyDiv>
      {!isDesignMode && <Breadcrumbs />}
      {sections.map(({ type, ...otherProps }, index) => {
        return (
          <>
            <Spacer height="40" />
            <PresetsRenderer key={index} type={type} {...otherProps} />
          </>
        );
      })}
    </LegacyDiv>
  );
};
