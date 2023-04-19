//Library imports
import React, { useState } from 'react';
import capitalize from 'lodash/capitalize';

//Internal imports
import { LegacyButton, LegacyDiv, LegacyHeading } from '../../components';
import mainContainerStyleProps from './styles/mainContainerStyleProps';
import sidebarMenuStyleProps from './styles/sidebarMenuStyleProps';
import headingContainerStyleProps from './styles/headingContainerStyleProps';
import headingStyleProps from './styles/headingStyleProps';
import { headingIconPath } from './assets';
import injectedLayout from './utils/injectedLayout';
import menuStyleProps from './styles/menuStyleProps';
import { OverviewContainer } from './components';
import { useNavigate } from 'react-router-dom';
import { BUTTON_STYLE } from '../register-page/styles';
import defaultMenuButtonsStyleProps from './styles/defaultMenuButtonsStyleProps';
import mergeStyles from '../../helpers/mergeStyles';
import activeMenuButtonStyle from './styles/activeMenuButtonStyle';

const Dashboard = (props) => {
  const [injectedContainer, setInjectedContainer] = useState(OverviewContainer);
  const [selectedButton, setSelectedButton] = useState(0);
  const navigator = useNavigate();

  const handleChangeContainer = (component, index) => {
    setSelectedButton(index);
    setInjectedContainer(component);
  };
  const handleLogout = () => {
    sessionStorage.removeItem('token');
    navigator('/login');
  };

  const mergedButtonStyle = mergeStyles(
    defaultMenuButtonsStyleProps,
    activeMenuButtonStyle,
  );

  return (
    <LegacyDiv styleProps={mainContainerStyleProps}>
      <LegacyDiv styleProps={sidebarMenuStyleProps}>
        <LegacyDiv styleProps={headingContainerStyleProps}>
          <img
            src={headingIconPath}
            alt="icon"
            style={{ width: '32px', height: '32px' }}
          />
          <LegacyHeading
            text="Legacy News Dashboard"
            styleProps={headingStyleProps}
          />
        </LegacyDiv>
        <LegacyDiv styleProps={menuStyleProps}>
          <LegacyDiv styleProps={{ ALL_DEVICES: { flexDirection: 'column' } }}>
            {injectedLayout.map(
              ({ layoutName, icon, injectedComponent }, index) => {
                return (
                  <LegacyButton
                    key={index}
                    text={capitalize(layoutName)}
                    styleProps={
                      index !== selectedButton
                        ? defaultMenuButtonsStyleProps
                        : mergedButtonStyle
                    }
                    onClick={() =>
                      handleChangeContainer(
                        injectedComponent({ ...props, setInjectedContainer }),
                        index,
                      )
                    }
                  />
                );
              },
            )}
          </LegacyDiv>
          <LegacyButton
            text="LOGOUT"
            onClick={handleLogout}
            paragraphStyle={{
              ALL_DEVICES: {
                fontSize: '14px',
                letterSpacing: '0.2px',
              },
            }}
            styleProps={BUTTON_STYLE}
          />
        </LegacyDiv>
      </LegacyDiv>
      {injectedContainer}
    </LegacyDiv>
  );
};

export default Dashboard;
