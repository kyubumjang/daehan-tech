import styled from '@emotion/styled';

const InnerTitleContainer = styled.div`
  width: 100%;
  height: 35vw;
  /* TODO: url 가리기 */
  background: url('https://daehan-tech.s3.ap-northeast-2.amazonaws.com/careers-kv-pc.webp')
    50% 50% / cover no-repeat;
  margin: 0 auto;
  padding: 8vw 11.25vw 0 11.25vw;
  color: #fff;
`;

const InnerTitleText = styled.h2`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  font-size: 4.5vw;
  font-weight: bold;
  color: #fff;
`;

const InnerSubtitle = styled.p`
  max-width: 1156px;
  margin: 0 auto;
  text-align: center;
  font-size: 1vw;
  width: 100%;
  margin-top: 18px;
`;

function InnerTitle() {
  return (
    <section>
      <InnerTitleContainer>
        <InnerTitleText>
          세상을 감동시키고
          <br />
          미래를 만들어 갑니다
        </InnerTitleText>
        <InnerSubtitle>
          여러분의 재능을 발견하고 혁신을 위한 열정을 공유할 수 있는
          <br />
          많은 사람들과 함께 미래를 만들어보세요
        </InnerSubtitle>
      </InnerTitleContainer>
    </section>
  );
}

export default InnerTitle;
