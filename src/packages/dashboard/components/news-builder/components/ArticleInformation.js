import React from 'react';
import { merge } from 'lodash';

import {
  LegacyButton,
  LegacyDiv,
  LegacyParagraph,
} from '../../../../../components';
import setStatusStyle from './helpers/setStatusStyle';
import setDropdownMenuProps from './helpers/setDropdownMenuProps';
import informationTextStyleProps from './styles/informationTextStyleProps';
import dropdownMenuStyleProps from './styles/dropdownMenuStyleProps';

export default ({ articles }) => {
  return (
    <LegacyDiv styleProps={{ ALL_DEVICES: { flexDirection: 'column' } }}>
      {articles.map(({ title, author, type, publishDate, status }, index) => (
        <LegacyDiv
          key={index}
          styleProps={{
            ALL_DEVICES: {
              padding: '12px 0',
              borderTop: '1px solid #E8E8E8',
            },
          }}
        >
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '30%', justifyContent: 'start' },
            }}
          >
            <LegacyParagraph
              text={title}
              styleProps={merge(informationTextStyleProps, {
                ALL_DEVICES: {
                  overflow: 'auto',
                  maxWidth: '250px',
                  textAlign: 'start',
                },
                TABLET: {
                  maxWidth: '150px',
                },
                MOBILE: {
                  maxWidth: '100px',
                },
              })}
            />
          </LegacyDiv>
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '20%', justifyContent: 'start' },
            }}
          >
            <LegacyParagraph
              text={author}
              styleProps={informationTextStyleProps}
            />
          </LegacyDiv>
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '15%', justifyContent: 'start' },
            }}
          >
            <LegacyParagraph
              text={type}
              styleProps={informationTextStyleProps}
            />
          </LegacyDiv>
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '15%', justifyContent: 'start' },
            }}
          >
            <LegacyParagraph
              text={publishDate}
              styleProps={informationTextStyleProps}
            />
          </LegacyDiv>
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '15%', justifyContent: 'start' },
            }}
          >
            <LegacyParagraph
              text={status}
              styleProps={setStatusStyle(status)}
            />
          </LegacyDiv>
          <LegacyDiv
            styleProps={{
              ALL_DEVICES: { width: '15%', justifyContent: 'start' },
            }}
          >
            <LegacyButton
              dropdownConfig={{
                isDropdownButton: true,
                optionsConfig: setDropdownMenuProps({
                  deleteAction: () => null,
                  editAction: () => null,
                  changeArticleStatus: () => null,
                  status,
                }),
                activeMenuStyle: dropdownMenuStyleProps,
              }}
              styleProps={{
                ALL_DEVICES: {
                  padding: 0,
                  background: 'transparent',
                  border: 'none',
                  width: 'fit-content',
                },
              }}
            />
          </LegacyDiv>
        </LegacyDiv>
      ))}
    </LegacyDiv>
  );
};
