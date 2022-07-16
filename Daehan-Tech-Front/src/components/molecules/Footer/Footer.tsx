import { MenuItemProps } from '@constants/MenuItem';
import styled from '@emotion/styled';
import { menuItems } from '../NavigationBar/MenuItems/MenuItems';
import FooterItems from './FooterItems/FooterItems';

const FooterTag = styled.footer`
  background-color: #fff;
  color: #555555;
  overflow-x: hidden;
  margin: 0 auto;
  padding: 12px 24px 24px 24px;
  max-width: 1440px;
`;

const FooterWrapper = styled.div`
  background-color: #fff;
`;

const FooterMenus = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 12px;
`;

function Footer() {
  return (
    <div>
      <section>
        <FooterTag>
          <FooterWrapper>
            <FooterMenus>
              {menuItems.map((menu: MenuItemProps) => (
                <FooterItems items={menu} key={menu.title} />
              ))}
            </FooterMenus>
          </FooterWrapper>
        </FooterTag>
      </section>
    </div>
  );
}

export default Footer;
