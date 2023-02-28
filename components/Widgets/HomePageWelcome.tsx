import styled from 'styled-components';
import Image from 'next/image'
import Container from 'react-bootstrap/Container';

// get the image from the public folder
import TLB_logo from '../../public/TLB_logo.webp';

const HomePageWelcome = ({welcomeMessageCopy}: {welcomeMessageCopy: JSX.Element}) => {
    return (
        <Container>
            <Image src={TLB_logo} alt="the Logo"/>
            {welcomeMessageCopy}
        </Container>

    );
};

export default HomePageWelcome;