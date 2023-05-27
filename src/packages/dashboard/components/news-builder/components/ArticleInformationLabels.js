import React from 'react';
import { LegacyDiv, LegacyParagraph } from '../../../../../components';
import articleInformationConfig from './utils/articleInformationConfig';

export default () => {
  return (
    <LegacyDiv styleProps={{ ALL_DEVICES: { paddingBottom: '12px' } }}>
      {articleInformationConfig.map(({ text, styleProps }, index) => (
        <LegacyParagraph key={index} text={text} styleProps={styleProps} />
      ))}
    </LegacyDiv>
  );
};
