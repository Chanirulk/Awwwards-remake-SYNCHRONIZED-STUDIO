import styled from 'styled-components';
import sun02 from '../../assets/image/sun.png';
import "./about.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto; 
`;
const Container = styled.div`
  position: absolute;
`;  

const LeftContainer = styled.div`
  position: absolute;
`; 

 

const About = () => {
  return (
    <SectionWrapper id="fixed-target" className="about">
      

      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
        <div className="oval"></div>
        <p className="ovl-text-one">we</p>
        <div className="oval-two"></div>
        <p className="ovl-text-two">are</p>
        <div className="ovl-text-three">synchro <br />
        nized </div>
        <p className="ovl-text-four">all <br />
        together</p>
        <p className="ovl-text-five-ligh">since'19</p>
      </LeftContainer>
     
      <img src={sun02} alt="" className="sun-teo" />
      <img src={sun02} alt="" className="sun-teo-two" />
      <img src={sun02} alt="" className="sun-teo-three" />
      <img src={sun02} alt="" className="sun-teo-four" />

      <p className="just">Just About</p>
      <Container
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1">
     
      </Container>
    </SectionWrapper>
  );
};

export default About;
