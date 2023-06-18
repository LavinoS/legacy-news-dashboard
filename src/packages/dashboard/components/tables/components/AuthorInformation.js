import React from 'react';

import { LegacyDiv, LegacyParagraph } from '../../../../../components';
import articleInformationContainerStyleProps from '../../news-builder/components/styles/articleInformationContainerStyleProps';
import LoaderSpinner from '../../../../../components/ui/LoaderSpinner';
import informationTextStyleProps from '../../news-builder/components/styles/informationTextStyleProps';
import additionalTitleStyleProps from '../../news-builder/components/styles/additionalTitleStyleProps';
import mergeStyles from '../../../../../helpers/mergeStyles';
import capitalize from 'lodash/capitalize';
import setRoleStyle from '../helpers/setRoleStyle';
import EditUserDropdownButton from './EditUserDropdownButton';

export default (props) => {
  const {
    methods: {
      receiveUserByIdMethod,
      deleteUserMethod,
      receiveUsersMethod,
      editUserByIdMethod,
    } = {},
    setInjectedContainer,
    fetching,
    setIsFetching,
    fetchedUsers,
  } = props;

  return (
    <LegacyDiv styleProps={articleInformationContainerStyleProps}>
      {fetching ? (
        <LoaderSpinner />
      ) : (
        fetchedUsers.map(
          (
            { firstName, lastName, userEmail, role, registeredAt, _id },
            index,
          ) => (
            <LegacyDiv
              key={index}
              styleProps={{
                ALL_DEVICES: {
                  padding: '12px 0',
                  borderTop: '1px solid #E8E8E8',
                  justifyContent: 'start',
                },
              }}
            >
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '30%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={`${firstName} ${lastName}`}
                  styleProps={mergeStyles(
                    informationTextStyleProps,
                    additionalTitleStyleProps,
                  )}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '30%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={userEmail}
                  styleProps={informationTextStyleProps}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={capitalize(role)}
                  styleProps={setRoleStyle(role)}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <LegacyParagraph
                  text={registeredAt}
                  styleProps={informationTextStyleProps}
                />
              </LegacyDiv>
              <LegacyDiv
                styleProps={{
                  ALL_DEVICES: { width: '15%', justifyContent: 'start' },
                }}
              >
                <EditUserDropdownButton
                  methodsParams={{ _id }}
                  methods={{
                    receiveUserByIdMethod,
                    deleteUserMethod,
                    receiveUsersMethod,
                    editUserByIdMethod,
                  }}
                  setIsFetching={setIsFetching}
                  setInjectedContainer={setInjectedContainer}
                />
              </LegacyDiv>
            </LegacyDiv>
          ),
        )
      )}
    </LegacyDiv>
  );
};
