'use client'

// Components
import { Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { breakpoint, breakpointSizes } from '../../../styling/style-mix-ins/CssBreakpoints';
import StyledLink from './StyledLink';
import { Spinner } from "@/components/component-building-blocks/atoms/Spinner"
import Image from 'next/image'

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

const StyledImg = styled(Image)`
object-fit: cover;
border-radius: 5px;
`;

const ImageWrapper = styled.div`
  flex: 2 1 280px;

  position: relative !important;
  height: 280px;
`;

const TextWrapper = styled.div`
    flex: 1 3 70%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    width: 100%;
    overflow: hidden;

    ${breakpoint.down(breakpointSizes.md)`

      padding: 0px;
    
    `}

`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

  `;

const CardWrapper = styled.div`
  padding: 12px;
  display: flex;
  border-top: 0.4px solid black;
  margin: 10px auto;
  height: auto;
  // flex: 0 0 auto;
  align-items: flex-start;
`

function BasicCard({ imgSrc, cardTitle, cardCopy, buttonCopy, date, author, onClick, link }: BasicCardProps) {

  // add sizing parameters to send to contentful: 
  const resizedImgSrc = getPhotoWithSize(imgSrc, null, 280);


  const screenSize = useScreenSize();

  return (

    <Suspense fallback={<Spinner />}>
      <CardWrapper>

        {!screenSize.isTabletOrMobile &&
          <ImageWrapper>
            <StyledImg src={resizedImgSrc} alt='story picture' fill={true} />
          </ImageWrapper>
        }

        <TextWrapper>
          <StyledLink href={link}><h3>{cardTitle}</h3></StyledLink>
          <p>{date} - {author}</p>
          {cardCopy}

          <ButtonWrapper>
            <Button variant="dark" onClick={onClick} href={link}>{buttonCopy}</Button>
          </ButtonWrapper>

        </TextWrapper>
      </CardWrapper>
    </Suspense>
  );
}

export default BasicCard;