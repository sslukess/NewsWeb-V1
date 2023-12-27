'use client'

// Components
import { Suspense } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { Col, Row, Container } from 'react-bootstrap';
import { breakpoint, breakpointSizes } from '../../../styling/style-mix-ins/CssBreakpoints';
import StyledLink from './StyledLink';
import { Spinner } from "@/components/component-building-blocks/atoms/Spinner"

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

const StoryCardWrapper = styled(Container)`
    display: flex;
    border-top: 0.4px solid black;
    margin: 10px auto;
    height: auto;
    flex: 1 1 auto;
    align-items: flex-start;
`;

const ImageWrapper = styled(StyledLink)`
    display: flex;
    justify-content: center;
    align-items: top;
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

    ${breakpoint.down(breakpointSizes.md)`

      padding: 0px;
    
    `}

`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

  `;

const StyledRow = styled(Row)`
    flex: 1 1 auto;
`;

const StyledImg = styled.img`
    padding: 10px;

`;

const StyledCol = styled(Col)`

    // no padding at breakpoint below md

    ${breakpoint.down(breakpointSizes.md)`

      padding: 0px;
    
    `}


`

function BasicCard({ imgSrc, cardTitle, cardCopy, buttonCopy, date, author, onClick, link }: BasicCardProps) {

  // add sizing parameters to send to contentful: 
  const resizedImgSrc = getPhotoWithSize(imgSrc, null, 180);

  const screenSize = useScreenSize();

  return (

    <Suspense fallback={<Spinner />}>
      <StoryCardWrapper fluid>
        <StyledRow>


          <StyledCol sm={{ order: 'first' }} md={{ order: 'last' }}>
            <TextWrapper>
              <p>{date} - {author}</p>
              <StyledLink href={link}><h3>{cardTitle}</h3></StyledLink>
              {cardCopy}

              {!screenSize.isTabletOrMobile &&
                <ButtonWrapper>
                  <Button variant="light" onClick={onClick} href={link}>{buttonCopy}</Button>
                </ButtonWrapper>
              }

            </TextWrapper>
          </StyledCol>

          <StyledCol md={4}>
            <ImageWrapper
              href={link}>
              <StyledImg src={resizedImgSrc} alt='story picture' width={'auto'} height={180} />
            </ImageWrapper>
          </StyledCol>

        </StyledRow>
      </StoryCardWrapper>
    </Suspense>
  );
}

export default BasicCard;