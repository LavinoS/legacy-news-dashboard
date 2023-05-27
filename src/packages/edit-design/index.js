import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BsBoxArrowInLeft } from 'react-icons/bs';
import { TbSquarePlus } from 'react-icons/tb';

//Internal imports
import { LegacyButton, LegacyDiv, LegacyHeading } from '../../components';
import mainContainerStyleProps from '../dashboard/styles/mainContainerStyleProps';
import headingContainerStyleProps from '../dashboard/styles/headingContainerStyleProps';
import headingStyleProps from '../dashboard/styles/headingStyleProps';
import mergeStyles from '../../helpers/mergeStyles';
import menuStyleProps from '../dashboard/styles/menuStyleProps';
import closeButtonStyleProps from './styles/closeButtonStyleProps';
import saveButtonStyleProps from './styles/saveButtonStyleProps';
import addSectionButtonStyleProps from './styles/addSectionButtonStyleProps';
import articleHeadingStyleProps from './styles/articleHeadingStyleProps';
import articleCardDefaultStyle from '../dashboard/components/news-builder/styles/articleCardDefaultStyle';
import ComponentFactory from '../../context/ComponentFactory';
import ArticleDesignRenderer from './components/ArticleDesignRenderer';
import AddSectionMenu from './components/AddSectionMenu';
import sectionCardStyleProps from './components/styles/sectionCardStyleProps';
import scrollMenuStyleProps from './components/styles/scrollMenuStyleProps';
import scrollPreviewSectionStyleProps from './components/styles/scrollPreviewSectionStyleProps';
import sidebarMenuStyleProps from '../dashboard/styles/sidebarMenuStyleProps';
import EditPresetMenu from './components/EditPresetMenu';

export default ({ injectedMethods }) => {
  const { receiveArticleMethod, updateArticleMethod } = injectedMethods;
  const { id } = useParams();
  const navigator = useNavigate();
  const PresetsRenderer = useContext(ComponentFactory);

  const [fetchedEntity, setFetchedEntity] = useState({});
  const [addSection, setAddSection] = useState({
    addSectionMenu: false,
    addedSections: [],
  });
  const [previewSection, setPreviewSection] = useState({ sectionType: '' });
  const [editPreset, setEditPreset] = useState({
    showEditPresetMenu: false,
    presetConfig: {},
    presetType: '',
  });

  const { addSectionMenu, addedSections } = addSection;
  const { showEditPresetMenu } = editPreset;
  const { sectionType } = previewSection;
  const { title } = fetchedEntity;

  useEffect(() => {
    receiveArticleMethod({
      payload: { id: id },
      callback: (result) => {
        if (!result.success) {
          navigator('/');
        }

        setFetchedEntity(result.data);
        setAddSection({
          addedSections: result.data.sections || [],
        });
      },
    });
  }, []);

  const handlePresetsMenu = () => {
    setAddSection((oldState) => ({
      ...oldState,
      addSectionMenu: !addSectionMenu,
    }));
    setPreviewSection({});
  };

  const handleSaveDesign = () => {
    updateArticleMethod({
      payload: { id: id, sections: [JSON.stringify(addedSections)] },
    });
  };

  return (
    <LegacyDiv styleProps={mainContainerStyleProps}>
      <LegacyDiv styleProps={sidebarMenuStyleProps}>
        <LegacyDiv styleProps={headingContainerStyleProps}>
          <BsBoxArrowInLeft
            size="30px"
            style={{ cursor: 'pointer' }}
            onClick={() => navigator('/')}
          />
          <LegacyHeading
            text={title}
            styleProps={mergeStyles(
              headingStyleProps,
              articleHeadingStyleProps,
            )}
          />
        </LegacyDiv>
        <LegacyDiv
          styleProps={mergeStyles(menuStyleProps, scrollMenuStyleProps)}
        >
          {!showEditPresetMenu ? (
            <LegacyDiv
              styleProps={{
                ALL_DEVICES: { flexDirection: 'column', marginBottom: '24px' },
              }}
            >
              {!addSectionMenu ? (
                <>
                  {addedSections.map(({ type }, index) => (
                    <LegacyDiv
                      key={index}
                      styleProps={sectionCardStyleProps}
                      onClick={() =>
                        setEditPreset({
                          showEditPresetMenu: true,
                          presetType: addedSections[index],
                          presetConfig: {},
                          currentPreset: index,
                        })
                      }
                    >
                      {type.replaceAll('_', ' ')}
                    </LegacyDiv>
                  ))}
                  <LegacyButton
                    text="ADD SECTION"
                    styleProps={addSectionButtonStyleProps}
                    onClick={handlePresetsMenu}
                  >
                    <TbSquarePlus size="25px" style={{ marginRight: '14px' }} />
                  </LegacyButton>
                </>
              ) : (
                <AddSectionMenu
                  addNewSection={setAddSection}
                  previewSection={{ setPreviewSection, previewSection }}
                />
              )}
            </LegacyDiv>
          ) : (
            <EditPresetMenu
              presetConfig={editPreset}
              saveConfig={setAddSection}
              setEditPreset={setEditPreset}
            />
          )}
        </LegacyDiv>
        {!addSectionMenu ? (
          <LegacyButton
            text="SAVE"
            styleProps={saveButtonStyleProps}
            onClick={handleSaveDesign}
          />
        ) : (
          <LegacyButton
            text="CLOSE"
            styleProps={closeButtonStyleProps}
            onClick={handlePresetsMenu}
          />
        )}
      </LegacyDiv>
      <LegacyDiv
        styleProps={mergeStyles(
          articleCardDefaultStyle,
          scrollPreviewSectionStyleProps,
        )}
      >
        <ArticleDesignRenderer
          article={fetchedEntity}
          sections={addedSections}
          isDesignMode={true}
        />
        {sectionType && <PresetsRenderer type={sectionType} />}
      </LegacyDiv>
    </LegacyDiv>
  );
};
