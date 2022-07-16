import { Link, LinkProps } from 'react-router-dom';
import styled from '@emotion/styled';

const StyledRouterLink = styled(Link)`
  text-decoration: none;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    color: white;
    text-decoration: none;
  }
`;

interface IProps extends LinkProps {
  children: JSX.Element | string;
}

function StyledLink({ children, ...props }: IProps) {
  return <StyledRouterLink {...props}>{children}</StyledRouterLink>;
}

export default StyledLink;
