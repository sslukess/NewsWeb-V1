import styled from 'styled-components';

const JustInPage = () => {
  return (
    <div>
      <h1>Just In</h1>
    </div>
  );
};

const getStaticProps = async () => {
    const data = 'x'
    
    return {
        props: { data },
    };
    }