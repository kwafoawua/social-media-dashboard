import React from 'react';
import {
  DashboardInfo,
  Divider,
  HeaderContainer,
  ModeSwitcher,
  Slider,
  Switch,
  TotalFollowers,
  Title,
  Checkbox,
} from './styles';

const Header = (props) => {
  console.log(props);
  return (
    <HeaderContainer>
      <DashboardInfo>
        <Title>Social Media Dashboard</Title>
        <TotalFollowers>Total Followers: 23,004</TotalFollowers>
      </DashboardInfo>
      <Divider />
        <ModeSwitcher>
          Dark Mode
          <Switch>
            <Checkbox type="checkbox" onClick={props.onChange}/>
              <Slider />
          </Switch>
        </ModeSwitcher>
    </HeaderContainer>
  )
};

export default Header;
