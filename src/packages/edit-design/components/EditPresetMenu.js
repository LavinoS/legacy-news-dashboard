import React from 'react';
import { LegacyButton, LegacyDiv } from '../../../components';
import presetsTypes from '../../../types/presetsTypes';
import saveButtonStyleProps from '../styles/saveButtonStyleProps';
import BannerEditor from './editors/BannerEditor';
import setNewConfigHelper from './helpers/setNewConfigHelper';
import TextEditor from './editors/TextEditor';

const PresetType = (props) => {
  const { config, currentPreset, saveConfig } = props;

  switch (config.type) {
    case presetsTypes.BANNER:
      return (
        <BannerEditor
          value={config?.options?.source}
          onChange={(value) =>
            saveConfig((oldConfig) =>
              setNewConfigHelper(oldConfig, currentPreset, value, 'source'),
            )
          }
        />
      );

    case presetsTypes.HEADING:
    case presetsTypes.PARAGRAPH:
      return (
        <TextEditor
          presetType={config.type}
          value={config?.options?.text || ''}
          onChange={(value) =>
            saveConfig((oldConfig) =>
              setNewConfigHelper(oldConfig, currentPreset, value, 'text'),
            )
          }
          sizePlaceholder={config?.options?.size || 'SIZE'}
          changeSize={(value) =>
            saveConfig((oldConfig) =>
              setNewConfigHelper(oldConfig, currentPreset, value, 'size'),
            )
          }
          alignmentPlaceholder={config?.options?.alignment || 'ALIGNMENT'}
          changeAlignment={(value) =>
            saveConfig((oldConfig) =>
              setNewConfigHelper(oldConfig, currentPreset, value, 'alignment'),
            )
          }
          changeVariants={(value) =>
            saveConfig((oldConfig) =>
              setNewConfigHelper(oldConfig, currentPreset, value, 'variant'),
            )
          }
          variantsPlaceholder={config?.options?.variant || 'VARIANT'}
        />
      );

    default:
      return;
  }
};

export default (props) => {
  const {
    presetConfig: { presetType, currentPreset } = {},
    setEditPreset,
    saveConfig,
  } = props;

  return (
    <LegacyDiv
      styleProps={{
        ALL_DEVICES: {
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
          paddingBottom: '24px',
        },
      }}
    >
      <PresetType
        config={presetType}
        saveConfig={saveConfig}
        currentPreset={currentPreset}
      />
      <LegacyButton
        styleProps={saveButtonStyleProps}
        onClick={() =>
          setEditPreset((oldState) => ({
            ...oldState,
            showEditPresetMenu: false,
          }))
        }
        text="CLOSE"
      />
    </LegacyDiv>
  );
};
