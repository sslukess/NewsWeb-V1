import styled from 'styled-components';
import Image from 'next/image'


const HeroWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto; 
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
`;

const HeroImage = styled(Image)`
    width: 100%;
    height: auto;
`;

const HeroPanel = ({imgSrc}) => {
    return (
        <HeroWrapper>
            <HeroImage src={imgSrc} alt="The main logo"/>
        </HeroWrapper>
    );
};

export default HeroPanel;