import React from 'react';
import Container from './Panel.style';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

function Panel({ children, className }: IProps) {
  return <Container className={className}>{children}</Container>;
}

Panel.defaultProps = {
  className: null,
};

export default Panel;
