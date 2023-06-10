import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { isEmpty } from 'lodash';

import {
  LegacyDiv,
  LegacyForm,
  LegacyHeading,
} from '../../../../../components';
import articleCardDefaultStyle from '../../news-builder/styles/articleCardDefaultStyle';
import headingContainerStyleProps from '../../news-builder/styles/headingContainerStyleProps';
import { headingVariants } from '../../../../../types/headingVariants';
import authorEditorFormConfiguration from '../utils/authorEditorFormConfiguration';
import { TableContainer } from '../../index';

export default (props) => {
  const { injectedMethods, setInjectedContainer, receivedForm = {} } = props;
  const { firstName, lastName, _id, ...restOfProps } = receivedForm;
  const editedReceivedForm = {
    ...restOfProps,
    id: _id,
    firstName,
    lastName,
  };
  const { editUserByIdMethod } = injectedMethods;

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (!isEmpty(userData)) {
      editUserByIdMethod(userData);
      setInjectedContainer(
        <TableContainer
          injectedMethods={injectedMethods}
          setInjectedContainer={setInjectedContainer}
        />,
      );
    }
  }, [userData]);

  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv
        styleProps={headingContainerStyleProps(
          'linear-gradient(195deg, #42424a 0%, #191919 100%)',
          '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(64, 64, 64, 0.4)',
        )}
      >
        <LegacyHeading
          text={`Edit ${lastName} ${firstName}'s account`}
          variant={headingVariants.H2}
        />
      </LegacyDiv>
      <LegacyForm
        styleProps={{
          ALL_DEVICES: {
            display: 'flex',
            flexDirection: 'column',
            width: '50%',
            alignSelf: 'start',
          },
        }}
        formConfiguration={authorEditorFormConfiguration}
        sendFormData={setUserData}
        receivedForm={editedReceivedForm}
        buttonContainerStyleProps={{
          ALL_DEVICES: {
            justifyContent: 'end',
          },
        }}
        submitButtonStyle={{
          ALL_DEVICES: {
            backgroundImage:
              'linear-gradient(195deg, #42424a 0%, #191919 100%)',
            boxShadow:
              '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(64, 64, 64, 0.4)',
            width: 'fit-content',
            alignSelf: 'end',
            '&:hover': {
              background: '#42424a',
              boxShadow:
                '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(64, 64, 64, 0.4)',
            },
          },
        }}
        buttonText="EDIT USER"
      />
      <LegacyDiv
        styleProps={{
          ALL_DEVICES: {
            position: 'absolute',
            width: 'fit-content',
            top: '50%',
            left: '75%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <FaUserCircle size="200px" />
      </LegacyDiv>
    </LegacyDiv>
  );
};
