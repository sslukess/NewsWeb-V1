
import { HeroPanel } from '../components/index';

function HomePage() {
    return (
      <HeroPanel />
    )
  }

  export async function getStaticProps(context) {
    return {
      props: {}, // will be passed to the page component as props
    }
  }
  
export default HomePage