import React from 'react';
import {
  LegacyDiv,
  LegacyParagraph,
  QuillRenderer,
} from '../../../../components';
import CustomSelect from '../../../../components/ui/CustomSelect';
import sizeOptionsConfig from '../utils/sizeOptionsConfig';
import alignmentOptionsConfig from '../utils/alignmentOptionsConfig';
import labelSectionStyleProps from './styles/labelSectionStyleProps';
import optionSelectorStyleProps from './styles/optionSelectorStyleProps';
import editorContainerStyleProps from './styles/editorContainerStyleProps';
import presetsTypes from '../../../../types/presetsTypes';
import variantsOptionsConfig from '../utils/variantsOptionsConfig';

export default (props) => {
  const {
    value,
    onChange,
    changeSize,
    sizePlaceholder,
    changeAlignment,
    alignmentPlaceholder,
    presetType,
    changeVariants,
    variantsPlaceholder,
  } = props;

  const isHeading = presetType === presetsTypes.HEADING;
  const editorLabelText = isHeading ? 'heading' : 'paragraph';

  return (
    <LegacyDiv styleProps={editorContainerStyleProps}>
      <LegacyParagraph
        text={`Edit ${editorLabelText} text`}
        styleProps={labelSectionStyleProps}
      />
      <QuillRenderer value={value} onChange={(value) => onChange(value)} />
      <LegacyParagraph
        text={`Edit ${editorLabelText} size`}
        styleProps={labelSectionStyleProps}
      />
      <CustomSelect
        optionsConfig={sizeOptionsConfig}
        onClick={(value) => changeSize(value)}
        placeholder={sizePlaceholder}
        selectStyleProps={optionSelectorStyleProps}
      />
      <LegacyParagraph
        text={`Edit ${editorLabelText} alignment`}
        styleProps={labelSectionStyleProps}
      />
      <CustomSelect
        optionsConfig={alignmentOptionsConfig}
        onClick={(value) => changeAlignment(value)}
        selectStyleProps={optionSelectorStyleProps}
        placeholder={alignmentPlaceholder}
      />
      {isHeading && (
        <>
          <LegacyParagraph
            text={`Edit ${editorLabelText} variant`}
            styleProps={labelSectionStyleProps}
          />
          <CustomSelect
            optionsConfig={variantsOptionsConfig}
            onClick={(value) => changeVariants(value)}
            selectStyleProps={optionSelectorStyleProps}
            placeholder={variantsPlaceholder}
          />
        </>
      )}
    </LegacyDiv>
  );
};
