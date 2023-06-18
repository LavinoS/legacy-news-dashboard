import React from 'react';
import { LegacyDiv } from '../../components';
import { noImageFound } from '../assets';

export default (props) => {
  const { options: { source = noImageFound, alt = 'image' } = {} } = props;
  const objectFit = source === noImageFound ? 'contain' : 'cover';

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          width: '100%',
          maxWidth: '1100px',
          height: '300px',
        },
        TABLET: {
          padding: '0 46px',
        },
        MOBILE: {
          padding: '0 46px',
        },
      }}
    >
      <img
        src={source}
        alt={alt}
        style={{ width: '100%', height: '100%', objectFit: objectFit }}
      />
    </LegacyDiv>
  );
};
