import styled from '@emotion/styled';

interface IProps {
  title: string;
  description: string;
}

const SectionHeadContainer = styled.section`
  padding: 100px 0 60px 0;
  text-align: center;
`;
const TextWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

const HeadTitle = styled.h3`
  width: 100%;
  font: bold 54px/1.33 'KOTRA_BOLD';
  font-size: 2vw;
  text-align: center;
`;
const Description = styled.p`
  margin-top: 1.3vw;
  font-size: 1.25vw;
  text-align: center;
`;

function SectionHead({ title, description }: IProps) {
  return (
    <SectionHeadContainer>
      <TextWrapper>
        <HeadTitle>{title}</HeadTitle>
        <Description>
          {description.split('.')[0]}
          <br />
          {description.split('.')[1]}
        </Description>
      </TextWrapper>
    </SectionHeadContainer>
  );
}

export default SectionHead;
