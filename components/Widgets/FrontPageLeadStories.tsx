
//Compontent Import
import { BasicCard } from '../sub-components/SubComponentIndex';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const dummyStories = {
    story1: {
        imgSrc: '/story-pics/story1.jpg',
        cardTitle: 'KSHS Upgrade To Be Completed By 2079',
        cardCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante.',
        buttonCopy: 'Read More'
    },
    story2: {
        imgSrc: '/story-pics/story2.jpg',
        cardTitle: 'How Walking Can Improve Your Health',
        cardCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante.',
        buttonCopy: 'Read More'
    },
    story3: {
        imgSrc: '/story-pics/story3.jpg',
        cardTitle: 'George Voted Cutest Cat In The World',
        cardCopy: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam nisl, eget aliquam nunc nisl eu ante.',
        buttonCopy: 'Read More'
    }
}

const FrontPgLeadStories = (props) => {

    const { story1, story2, story3 } = props;


    return (

        <Container>
            <Row>
                <Col md={4} sm={12}>
                    <BasicCard
                        imgSrc={story1.imgSrc}
                        cardTitle={story1.cardTitle}
                        cardCopy={story1.cardCopy}
                        buttonCopy={story1.buttonCopy}
                    />
                </Col>
                <Col md={4} sm={12}>
                    <BasicCard
                        imgSrc={story2.imgSrc}
                        cardTitle={story2.cardTitle}
                        cardCopy={story2.cardCopy}
                        buttonCopy={story2.buttonCopy}
                    />
                </Col>
                <Col md={4} sm={12}>
                    <BasicCard
                        imgSrc={story3.imgSrc}
                        cardTitle={story3.cardTitle}
                        cardCopy={story3.cardCopy}
                        buttonCopy={story3.buttonCopy}
                    />
                </Col>
            </Row>
        </Container>
    )
};

export default FrontPgLeadStories;