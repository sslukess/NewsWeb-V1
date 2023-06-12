'use client'

// Components
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

// Hooks
import useScreenSize from '../../../utils/custom-hooks/useScreenSize';

import { getPhotoWithSize } from '../../../utils/story-utils/GetPhotoWithSize';

// === Interfaces ===

interface BasicCardProps {
  imgSrc: string;
  cardTitle: string;
  cardCopy: React.ReactNode;
  buttonCopy: string;
  date?: string;
  author?: string;
  onClick?: () => void;
  link?: string;
}

// === STYLES ===

// const ImageWrapper = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     width: 100%;
//     height: 180px;
//     overflow: hidden;
// `;

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

// --- refresh 

const StoryCardWrapper = styled.div`
    display: flex;
    border-top: 0.4px solid black;
    margin: 10px auto;
    height: auto;
    align-items: center;
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 180px;
    overflow: hidden;
    padding: 3px;
    flex: 1 2 auto;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    overflow: hidden;
    flex: 2 1 auto;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

  `;

const StyledLink = styled.a`
    // text-decoration: none;
  `;

const StyledImg = styled.img`
    padding: 10px;
`

function BasicCard({ imgSrc, cardTitle, cardCopy, buttonCopy, date, author, onClick, link }: BasicCardProps) {

  // add sizing parameters to send to contentful: 
  const resizedImgSrc = getPhotoWithSize(imgSrc, null, 180);

  const screenSize = useScreenSize();

  return (
    // <StyledCard >
    //   <ImageWrapper>
    //     <StyledCardImage variant="top" src={resizedImgSrc} />
    //   </ImageWrapper>
    //   <Card.Body>
    //     <Card.Title>{cardTitle}</Card.Title>
    //     {/* Setting card text to render a div, stops Next hydration errors */}
    //     <Card.Text as={"div"}> 
    //       {cardCopy}
    //     </Card.Text>
    //     <Button variant="primary" onClick={onClick} href={link}>{buttonCopy}</Button>
    //   </Card.Body>
    // </StyledCard>

    <StoryCardWrapper>
      <ImageWrapper>
        <StyledImg src={resizedImgSrc} alt='story picture' width={'auto'} height={180} />
      </ImageWrapper>

      <TextWrapper>
        <p>{date} - {author}</p>
        <StyledLink href={link}><h3>{cardTitle}</h3></StyledLink>
        {cardCopy}

        {!screenSize.isTabletOrMobile &&
          <ButtonWrapper>
            <Button variant="primary" onClick={onClick} href={link}>{buttonCopy}</Button>
          </ButtonWrapper>
        }


      </TextWrapper>
    </StoryCardWrapper>

  );
}

export default BasicCard;