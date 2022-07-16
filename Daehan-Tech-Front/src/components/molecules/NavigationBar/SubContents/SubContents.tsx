import { MenuContent } from '@constants/MenuItem';
import styled from '@emotion/styled';

interface IProps {
  items: MenuContent[];
}

const SubContentsUl = styled.ul`
  color: #ffffff;
  font-size: 12px;
`;

const SubContentsLi = styled.li`
  color: #757575;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    transition: all 0.2s ease-in 0s;
  }
`;

function SubContents({ items }: IProps) {
  return (
    <SubContentsUl>
      {items.map((item) => (
        <SubContentsLi key={item.contentTitle}>
          {item.contentTitle}
        </SubContentsLi>
      ))}
    </SubContentsUl>
  );
}

export default SubContents;
