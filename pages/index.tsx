
import { HeroPanel } from '../components/index';


function HomePage() {
  return (


    // Hero Content
    <HeroPanel
      imgSrc={'/creek.jpg'}
      headingCopy={'I am a heading'} 
      paragraphCopy={'Paragraph copy goes here'}
      buttonCopy={'Click me!'}
    />

  )
}

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}

export default HomePage