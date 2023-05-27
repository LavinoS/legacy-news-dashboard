import React, { useEffect, useState } from 'react';
import {
  LegacyDiv,
  LegacyForm,
  LegacyHeading,
} from '../../../../../components';
import articleEditorFormConfiguration from './utils/articleEditorFormConfiguration';
import articleCardDefaultStyle from '../styles/articleCardDefaultStyle';
import headingContainerStyleProps from '../styles/headingContainerStyleProps';
import { headingVariants } from '../../../../../types/headingVariants';
import { isEmpty } from 'lodash';
import { NewsBuilderContainer } from '../../index';

export default (props) => {
  const {
    containerText = 'Create new article',
    injectedMethod,
    setInjectedContainer,
    injectedMethods,
    receivedForm = {},
    buttonText = 'CREATE',
    injectedComponent,
  } = props;
  const [articleData, setArticleData] = useState({});

  useEffect(() => {
    if (!isEmpty(articleData)) {
      injectedMethod(articleData);
      setInjectedContainer(
        <NewsBuilderContainer
          injectedMethods={injectedMethods}
          setInjectedContainer={setInjectedContainer}
        />,
      );
    }
  }, [articleData]);

  return (
    <LegacyDiv styleProps={articleCardDefaultStyle}>
      <LegacyDiv
        styleProps={headingContainerStyleProps(
          'linear-gradient(195deg, #42424a 0%, #191919 100%)',
          '0 4px 20px 0 rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(64, 64, 64, 0.4)',
        )}
      >
        <LegacyHeading text={containerText} variant={headingVariants.H2} />
      </LegacyDiv>
      <LegacyForm
        styleProps={{
          ALL_DEVICES: {
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridTemplateRows: 'repeat(6, 1fr)',
            gridGap: '0 20px',
          },
        }}
        formConfiguration={articleEditorFormConfiguration}
        sendFormData={setArticleData}
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
        receivedForm={receivedForm}
        buttonText={buttonText}
        injectedComponent={injectedComponent}
        buttonContainerStyleProps={{
          ALL_DEVICES: {
            justifyContent: 'end',
          },
        }}
      />
    </LegacyDiv>
  );
};
