import styled from '@emotion/styled';

const SubHeaderContainer = styled.div`
  height: 56px;
`;

const Nav = styled.nav`
  background-color: #000000;
  color: #ffffff;
  &::before {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: -100%;
    z-index: -1;
    background-color: #000;
  }
`;

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 1440px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 56px;
  padding: 0 32px;
`;

const SubHeaderTitleWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  max-width: 444px;
  z-index: 1;
  top: auto;
`;

const SubHeaderTitle = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
`;

const MenuItemsContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0;
  font-size: 12px;
  flex: 1 1 auto;
  padding-left: 0;
  min-width: 0;
  position: relative;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const MenuItem = styled.div`
  display: inline-block;
  width: 100%;
  height: 100%;
  margin-top: 19px;
  margin-right: 40px;
  vertical-align: middle;
  cursor: pointer;
  background-color: transparent;
  text-transform: uppercase;
  &::after {
    display: block;
    content: '';
    width: 100%;
    height: 19px;
    border-bottom: solid 2px #fff;
    transform: scaleX(0);
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:hover {
    &::after {
      transform: scaleX(1);
      width: 100%;
    }
  }
`;
function SubHeader() {
  return (
    <SubHeaderContainer>
      <Nav>
        <NavContainer>
          <SubHeaderTitleWrapper>
            <SubHeaderTitle>채용</SubHeaderTitle>
          </SubHeaderTitleWrapper>
          <MenuItemsContainer>
            <MenuItems>
              <MenuItem>
                <a href='#overview'>개요</a>
              </MenuItem>
              <MenuItem>
                <a href='#people'>인재상</a>
              </MenuItem>
              <MenuItem>
                <a href='#fields'>직무소개</a>
              </MenuItem>
            </MenuItems>
          </MenuItemsContainer>
        </NavContainer>
      </Nav>
    </SubHeaderContainer>
  );
}

export default SubHeader;
