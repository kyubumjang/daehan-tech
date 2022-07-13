import StyledLink from '@components/atoms/StyledLink/StyledLink';
import styled from '@emotion/styled';
import { Button } from 'antd';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 128px;
  font-weight: 400;
`;

function NotFoundPage() {
  return (
    <Wrapper>
      <Text>404 Not Found</Text>
      <StyledLink to='/'>
        <Button>홈으로</Button>
      </StyledLink>
    </Wrapper>
  );
}

export default NotFoundPage;
