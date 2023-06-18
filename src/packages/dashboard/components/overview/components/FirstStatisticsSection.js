import React from 'react';

import { LegacyDiv, LegacyParagraph } from '../../../../../components';
import statisticsCardsDefaultStyleProps from '../styles/statisticsCardsDefaultStyleProps';
import statisticsFirstSectionContainers from '../styles/statisticsFirstSectionContainers';
import iconAndDescriptionContainerStyleProps from '../styles/iconAndDescriptionContainerStyleProps';

export default (props) => {
  const { firstSection } = props;

  return (
    <LegacyDiv styleProps={statisticsCardsDefaultStyleProps}>
      {firstSection &&
        firstSection.map(
          ({ label, value, additionalText, icon: Icon }, index) => (
            <LegacyDiv
              styleProps={statisticsFirstSectionContainers}
              key={index}
            >
              <LegacyDiv styleProps={iconAndDescriptionContainerStyleProps}>
                <LegacyDiv
                  styleProps={{
                    ALL_DEVICES: {
                      width: 'fit-content',
                      padding: 20,
                    },
                  }}
                >
                  <Icon size={30} style={{ color: '#FFF' }} />
                </LegacyDiv>
                <LegacyDiv
                  styleProps={{
                    ALL_DEVICES: {
                      flexDirection: 'column',
                      width: 'fit-content',
                    },
                  }}
                >
                  <LegacyParagraph
                    styleProps={{
                      ALL_DEVICES: {
                        color: '#7b809a',
                        fontSize: '16px',
                        fontWeight: '300',
                        lineHeight: '21px',
                        textTransform: 'capitalize',
                      },
                    }}
                    text={label}
                  />
                  <LegacyParagraph
                    styleProps={{
                      ALL_DEVICES: {
                        color: '#344767',
                        fontSize: '22px',
                        fontWeight: '600',
                        lineHeight: '30px',
                        textTransform: 'capitalize',
                        width: '100%',
                        textAlign: 'end',
                      },
                    }}
                    text={value}
                  />
                </LegacyDiv>
              </LegacyDiv>
              <LegacyParagraph
                styleProps={{
                  ALL_DEVICES: {
                    color: '#7b809a',
                    fontSize: '14px',
                    fontWeight: '300',
                    lineHeight: '21px',
                    width: '100%',
                    textAlign: 'start',
                  },
                }}
                text={additionalText}
              />
            </LegacyDiv>
          ),
        )}
    </LegacyDiv>
  );
};
