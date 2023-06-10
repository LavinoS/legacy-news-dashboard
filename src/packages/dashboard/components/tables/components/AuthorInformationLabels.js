import React from 'react';
import { LegacyDiv, LegacyParagraph } from '../../../../../components';
import authorsInformationConfig from '../utils/authorsInformationConfig';

export default () => {
  return (
    <LegacyDiv styleProps={{ ALL_DEVICES: { paddingBottom: '12px' } }}>
      {authorsInformationConfig.map(({ text, styleProps }, index) => (
        <LegacyParagraph key={index} text={text} styleProps={styleProps} />
      ))}
    </LegacyDiv>
  );
};
