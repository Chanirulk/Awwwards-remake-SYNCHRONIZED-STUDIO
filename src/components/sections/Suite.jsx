import styled from 'styled-components';
import fucn2 from "../../assets/image/sun.png";
import "./suite.css"; 
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto;
  color: white; 
`;
const RightContainer = styled.div` 
`;
const LeftContainer = styled.div` 
top: 25%;
left: 30%; 
position: absolute;
`;  

const Suite = () => {
  return (
    <SectionWrapper>
     <LeftContainer
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
          <img src={fucn2} alt="" className='fucn-tot' />
     </LeftContainer>
    <RightContainer
     data-scroll
     data-scroll-delay=".15"
     data-scroll-speed="1">
      <a href="https://www.instagram.com/chaniru.lk/" className="credit">@chaniru.lk</a>
    </RightContainer>
    </SectionWrapper>
  );
};

export default Suite;
