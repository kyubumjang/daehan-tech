import styled from '@emotion/styled';

interface IProps {
  title: string;
  description: string;
  thumbnail_url: string;
}

const ItemList = styled.li`
  margin-left: 24px;
`;

const ItemContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const TextArea = styled.div`
  width: 100%;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 2vw;
  color: #ffffff;
  text-align: center;
  z-index: 1;
`;

const Title = styled.strong`
  display: block;
  font: bold 36px/2 'KOTRA_BOLD';
  font-size: 2vw;
`;

const Description = styled.span`
  display: block;
  font-size: 1.25vw;
  margin-top: 0.5vw;
`;

const Figure = styled.figure`
  position: relative;
  overflow: hidden;
  border-radius: 2vw;
`;

const Img = styled.img`
  display: block;
  width: 100%;
  max-width: none;
`;

function OverviewListItem({ title, description, thumbnail_url }: IProps) {
  return (
    <ItemList>
      <ItemContainer>
        <TextArea>
          <Title>{title}</Title>
          <Description>{description}</Description>
        </TextArea>
        <Figure>
          <Img src={thumbnail_url} alt={thumbnail_url} />
        </Figure>
      </ItemContainer>
    </ItemList>
  );
}

export default OverviewListItem;
