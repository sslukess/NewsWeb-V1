'use client'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

import { getPhotoWithSize } from '../../../utils/story-utils/GetPhotoWithSize';

// === Interfaces ===

interface BasicCardProps {
  imgSrc: string;
  cardTitle: string;
  cardCopy: React.ReactNode;
  buttonCopy: string;
  onClick?: () => void;  
  link?: string;
}

// === STYLES ===

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

function BasicCard({ imgSrc, cardTitle, cardCopy, buttonCopy, onClick, link }: BasicCardProps) {

  // add sizing parameters to send to contentful: 
  const resizedImgSrc = getPhotoWithSize(imgSrc, null, 180);

  return (
    <StyledCard >
      <ImageWrapper>
        <StyledCardImage variant="top" src={resizedImgSrc} />
      </ImageWrapper>
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        {/* Setting card text to render a div, stops Next hydration errors */}
        <Card.Text as={"div"}> 
          {cardCopy}
        </Card.Text>
        <Button variant="primary" onClick={onClick} href={link}>{buttonCopy}</Button>
      </Card.Body>
    </StyledCard>
  );
}

export default BasicCard;