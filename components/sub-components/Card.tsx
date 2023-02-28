import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    overflow: hidden;
`;

const StyledCardImage = styled(Card.Img)`
    width: auto;
    height: 100%;
    border-radius: 0px;
    padding: 10px 0;
`;

const StyledCard = styled(Card)`
max-width: 90%;
margin: 10px auto;
`;

function BasicCard({ imgSrc, cardTitle, cardCopy, buttonCopy }) {
  return (
    <StyledCard >
      <ImageWrapper>
        <StyledCardImage variant="top" src={imgSrc} />
      </ImageWrapper>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {cardCopy}
        </Card.Text>
        <Button variant="primary">{buttonCopy}</Button>
      </Card.Body>
    </StyledCard>
  );
}

export default BasicCard;