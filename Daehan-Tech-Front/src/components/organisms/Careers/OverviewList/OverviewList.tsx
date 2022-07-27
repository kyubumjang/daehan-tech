import styled from '@emotion/styled';
import OverviewListItem from './OverviewListItem';

const OverviewListContainer = styled.section`
  padding: 11vw 1.5vw 7vw 1.5vw;
`;

const OverviewListWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;
const OverviewTitle = styled.h3`
  width: 100%;
  text-align: center;
  font: bold 54px/1.33 'KOTRA_BOLD';
  font-size: 2vw;
  color: #000;
`;
const OverviewLists = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  padding-top: 5vw;
`;

function OverviewList() {
  return (
    <OverviewListContainer>
      <OverviewListWrapper>
        <OverviewTitle>미래를 이끌어나갈 여러분들과 함께합니다.</OverviewTitle>
        <OverviewLists>
          {/* TODO: URL 가리기 */}
          <OverviewListItem
            title='열정'
            description='끊임없는 열정으로 미래에 도전하는 인재'
            thumbnail_url='https://daehan-tech.s3.ap-northeast-2.amazonaws.com/careers-overview-thumb01-pc.webp'
          />
          <OverviewListItem
            title='창의혁신'
            description='창의와 혁신으로 세상을 변화시키는 인재'
            thumbnail_url='https://daehan-tech.s3.ap-northeast-2.amazonaws.com/careers-overview-thumb02-pc.webp'
          />
          <OverviewListItem
            title='인간미·도덕성'
            description='정직과 바른 행동으로 역할과 책임을 다하는 인재'
            thumbnail_url='https://daehan-tech.s3.ap-northeast-2.amazonaws.com/careers-overview-thumb03-pc.webp'
          />
        </OverviewLists>
      </OverviewListWrapper>
    </OverviewListContainer>
  );
}

export default OverviewList;
