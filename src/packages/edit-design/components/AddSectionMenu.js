import React from 'react';
import presetsTypes from '../../../types/presetsTypes';
import { LegacyButton, LegacyDiv } from '../../../components';
import saveButtonStyleProps from '../styles/saveButtonStyleProps';
import sectionCardStyleProps from './styles/sectionCardStyleProps';

export default (props) => {
  const {
    addNewSection,
    previewSection: { setPreviewSection, previewSection } = {},
  } = props;

  const previewNewSection = (preset) => {
    setPreviewSection((currentSections) => ({
      ...currentSections,
      sectionType: preset,
    }));
  };

  const addCurrentSection = () => {
    addNewSection((currentSections) => ({
      ...currentSections,
      addedSections: [
        ...currentSections.addedSections,
        {
          type: previewSection.sectionType,
        },
      ],
    }));

    setPreviewSection({});
  };

  return (
    <>
      {Object.keys(presetsTypes).map((preset, index) => {
        return (
          <LegacyDiv
            key={index}
            styleProps={sectionCardStyleProps}
            onClick={() => previewNewSection(preset)}
          >
            {preset.replaceAll('_', ' ')}
          </LegacyDiv>
        );
      })}
      <LegacyButton
        styleProps={saveButtonStyleProps}
        onClick={addCurrentSection}
        text="ADD PRESET"
      />
    </>
  );
};
