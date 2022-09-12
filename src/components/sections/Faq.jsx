import styled from 'styled-components'; 
import "./faq.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative; 
  display: flex; 
  margin: 0 auto; 
`;


const LeftContainer = styled.div`  
`; 

 
const Faq = () => {
  return (
    <SectionWrapper id="fixed-target" className="faq">
      
      
      
      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      > 
      <p className="awwwards">Awwwards</p>
      <p className="rede">redesign</p>
      <div className="user">@chaniru.lk</div>
      <div className="oval-faq">
        <p className="ans">and</p>
      </div>

      </LeftContainer>
    </SectionWrapper>
  );
};

export default Faq;
