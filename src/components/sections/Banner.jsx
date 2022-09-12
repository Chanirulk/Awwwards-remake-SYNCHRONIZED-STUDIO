import styled from 'styled-components'; 
import sun03 from '../../assets/image/sun.png';
import "./banner.css"; 
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto; 

`;

const LeftContainer = styled.div` 
`; 
  

const Banner = () => {
  return (
    <SectionWrapper id="fixed-target" className="banner">
     
      <LeftContainer
      data-scroll
      data-scroll-delay=".15"
      data-scroll-speed="1">
        <img src={sun03} alt="" className="sun-baner" />
        <p className="sele-work">selected <br />
        cases</p>
      </LeftContainer>
    </SectionWrapper>
  );
};

export default Banner;
