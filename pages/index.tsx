
import { HomePageWelcome } from '../components/index';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage() {
  return (

      <Container>
        <Row>
          <Col>
            <HomePageWelcome welcomeMessageCopy={<p>Hi, I'm the welcome message copy</p>}/>
          </Col>

          <Col>
            <h1>Home Page</h1>
          </Col>
          </Row>
      </Container>
  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default HomePage