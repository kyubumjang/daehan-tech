import { SearchOutlined } from '@ant-design/icons';
import { StyledLink } from '@components/atoms';
import MenuItems, {
  menuItems,
} from '@components/molecules/NavigationBar/MenuItems/MenuItems';
import { MenuItemProps } from '@constants/MenuItem';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import { Button, Tooltip } from 'antd';

const Container = styled.div`
  height: 60px;
  position: relative;
  z-index: 260;
`;

const Header = styled.header`
  background-color: #000000;
  backdrop-filter: none;
  width: 100%;
  height: 100%;
  &::after {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: #333;
    content: '';
    left: 50%;
    display: block;
    transform: translate(-50%, 0);
    max-width: 100vw;
    z-index: 100;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1440px;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 32px;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin: 0 48px 0 48px;
  padding-top: 5px;
  align-self: flex-start;
`;

const Menus = styled.ul`
  display: flex;
`;

const H1 = styled.h1`
  font-family: 'KotraBold';
  font-size: 16px;
  font-weight: bold;
  color: white;
`;

const IconContainer = styled.div`
  display: flex;
  color: white;
`;

const StyledIconBtn = styled(Button)`
  background-color: #000;
  color: white;
  border: none;
`;
// TODO: 닫기 Button 추가
// TODO: Link 추가
function NavigationBar() {
  const theme = useTheme();
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <H1 theme={theme}>
            <StyledLink to='/'>대한테크</StyledLink>
          </H1>
          <Navigation>
            <Menus>
              {menuItems.map((menu: MenuItemProps) => (
                <MenuItems items={menu} key={menu.title} />
              ))}
            </Menus>
          </Navigation>
          <IconContainer>
            <Tooltip title='검색'>
              <StyledIconBtn
                shape='circle'
                icon={<SearchOutlined />}
                size='large'
              />
            </Tooltip>
          </IconContainer>
        </HeaderContainer>
      </Header>
    </Container>
  );
}

export default NavigationBar;
