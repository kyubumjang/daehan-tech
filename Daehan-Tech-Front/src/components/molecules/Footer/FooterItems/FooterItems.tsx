import { MenuItemProps } from '@constants/MenuItem';
import styled from '@emotion/styled';

interface IProps {
  items: MenuItemProps;
}

const FooterItem = styled.li`
  flex: 1 1 calc(16% - 24px);
`;

const Span = styled.span`
  color: #555555;
  font-weight: 900;
`;

const SubMenuItem = styled.li`
  font-size: 0.8rem;
  line-height: 1.33;
  color: #555555;
  margin-bottom: 5px;
`;
function FooterItems({ items }: IProps) {
  return (
    <FooterItem>
      <div>
        <Span>{items.title}</Span>
        <div>
          <ul>
            {items.submenu ? (
              <>
                {items.submenu.map((submenu) => (
                  <SubMenuItem key={submenu.subtitle}>
                    {submenu.subtitle}
                  </SubMenuItem>
                ))}
              </>
            ) : (
              <Span>{items.title}</Span>
            )}
          </ul>
        </div>
      </div>
    </FooterItem>
  );
}

export default FooterItems;
