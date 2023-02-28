import styled from 'styled-components';

const HeroWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto; 
    background-color: #f5f5f5;
    padding: 20px;
    margin-bottom: 20px;
`;

const HeroImage = styled.img`
    width: 100%;
    height: auto;
`;

const HeroPanel = () => {
    return (
        <HeroWrapper>
            <HeroImage src="/TLB_logo.webp" />
        </HeroWrapper>
    );
};

export default HeroPanel;