import React from 'react';
import { LegacyDiv, LegacyParagraph } from '../../../../components';
import ImageUploader from '../../../../components/ui/ImageUploader';
import editorContainerStyleProps from './styles/editorContainerStyleProps';
import labelSectionStyleProps from './styles/labelSectionStyleProps';

export default (props) => {
  const { value, onChange } = props;

  return (
    <LegacyDiv styleProps={editorContainerStyleProps}>
      <LegacyParagraph
        text="Change banner picture"
        styleProps={labelSectionStyleProps}
      />
      <ImageUploader
        value={value}
        onChange={(value) => onChange(value)}
        hidden={true}
        iconColor="#FFF"
        uploadParagraphStyleProps={{
          ALL_DEVICES: {
            color: '#FFF',
            fontSize: '14px',
          },
        }}
        uploadDirectly={true}
        imageUploaderContainerStyle={{
          ALL_DEVICES: {
            height: '240px',
          },
        }}
      />
    </LegacyDiv>
  );
};
