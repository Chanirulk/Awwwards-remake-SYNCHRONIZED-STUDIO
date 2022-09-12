import styled from 'styled-components'; 
import "./video.css"; 
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative; 
  display: flex;
  margin: 0 auto; 
`;
const RightContainer = styled.div` 
  position: absolute;
  text-transform: uppercase;
  color: rgb(224, 224, 224);
  font-family: richo; 
  font-size: 3em;
  text-align: center;
  top: 9%;
  left: 30%;
`; 

const Second = () => {
  return (
    <SectionWrapper>
      <RightContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
      <div className="directions">
       <p className="sub-work-one">art direction</p>
       <p className="sub-work-two">branding</p>
       <p className="sub-work-three">web design</p>
       <p className="sub-work-four">mobile design</p>
       <p className="sub-work-five">content production</p>
       <p className="sub-work-six">motion design</p>
       <br /> 
       <p className="sub-work-seven">creative frontend</p>
       <p className="sub-work-eight">development</p>
       <p className="sub-work-nine">backend</p>
       <p className="sub-work-ten">development</p>
      </div>
      </RightContainer>
    </SectionWrapper> 
  );
};

export default Second;
