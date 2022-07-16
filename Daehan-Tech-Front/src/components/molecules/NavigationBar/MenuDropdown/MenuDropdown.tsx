import { StyledLink } from '@components/atoms';
import { SubMenu } from '@constants/MenuItem';
import styled from '@emotion/styled';
import SubContents from '../SubContents/SubContents';

interface IProps {
  submenus: SubMenu[];
}

const SubMenuContainer = styled.div`
  display: none;
`;

const SubMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  flex: 1 1 100%;
  flex-wrap: wrap;
  z-index: 10;
  left: 0;
  margin-top: 41px;
  transform: none;
  background-color: #0e0f10;
  border-top: 1px solid #333333;
  padding: 50px 32px 12px 32px;
  &::after {
    position: absolute;
    overflow: hidden;
    display: block !important;
    content: '';
    top: 100%;
    width: 100%;
    height: 100vh;
    left: 0;
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const SubMenus = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex: 0 1 100%;
  &::after {
    content: '';
    flex: 1 1 auto;
  }
`;

const SubMenuItem = styled.li`
  position: relative;
  box-sizing: content-box;
  flex: 0 0 20%;
  padding: 0 0 32px 36px;
  max-width: 202px;
`;

const SubMenuFigure = styled.figure`
  isolation: isolate;
  display: block;
`;

const SubmenuPicture = styled.picture`
  display: block;
`;

const Icon = styled.img`
  position: absolute;
  vertical-align: top;
  left: 0;
  top: -4px;
`;

const SubTitle = styled.span`
  flex: 0 0 auto;
  max-width: 90%;
  &::after {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin: 5px 0 0 5px;
    content: '';
    background-size: 12px 12px;
    background-repeat: no-repeat;
    background-position: center;
    /* TODO: webpack image import 설정 실패 추후 시도해볼 것 */
    /* background-image: url('../assets/images/icon-bold-navigation-next-white.svg'); */
    background-image: url('/images/icon-bold-navigation-next-white.svg');
    flex: 0 0 auto;
  }
`;

function MenuDropdown({ submenus }: IProps) {
  return (
    <SubMenuContainer className='subMenuContainer'>
      <SubMenuWrapper>
        <SubMenus>
          {submenus.map((submenu) => (
            <SubMenuItem key={submenu.subtitle}>
              <StyledLink to='/#'>
                <>
                  <SubMenuFigure>
                    <SubmenuPicture>
                      {process.env.REACT_APP_IMAGE_SERVER && (
                        <Icon
                          src={`${process.env.REACT_APP_IMAGE_SERVER}/${submenu.subtitleIcons}`}
                          width='28'
                          height='28'
                          alt='1'
                        />
                      )}
                    </SubmenuPicture>
                  </SubMenuFigure>
                  <SubTitle>{submenu.subtitle}</SubTitle>
                </>
              </StyledLink>
              <SubContents items={submenu.content} key={submenu.subtitle} />
            </SubMenuItem>
          ))}
        </SubMenus>
      </SubMenuWrapper>
    </SubMenuContainer>
  );
}

export default MenuDropdown;
