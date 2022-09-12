import styled from 'styled-components'; 
import { motion } from 'framer-motion';
import icon from "../assets/image/logo.png"; 
import circle from "../assets/image/sun.png"
import "./cover.css";
const SectionWrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  color: white;
  
  
`;
const RightContainer = styled.div`
  position: absolute;
`; 

const LeftContainer = styled.div`
  position: absolute;
`; 

const Container = styled.div`
  position: absolute;
`; 

 
const TitleWrapper = styled(motion.div)`

`;




const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

 

const CoverVideo = () => {
  return (
    <SectionWrapper>
      <LeftContainer>
      <div class="marquee">
     <div className='mart'>
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span> 
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span>
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span>
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span> 
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span>
      <span><i class="fa fa-truck"></i>Synchronized</span>
      <span><i class="fa fa-cube"></i>Achive</span>
      <span><i class="fa fa-shield"></i>Synchronized</span>
      <span><i class="fa fa-leaf"></i>Achive</span>
      <span><i class="fa fa-star"></i>Synchronized</span>
    </div>
  </div>
      </LeftContainer>
     <TitleWrapper
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <div>
          <motion.h1
            variants={itemVariants}
            data-scroll
            data-scroll-delay=".15"
            data-scroll-speed="3"
          >
           <p className="head-titl-one">Synchronized</p>
           <img src={circle} alt="" className="circle" />
           <p className="head-titl-two">Digital</p>
           <p className="head-titl-three">Creative</p>
           <p className="head-titl-four">Studio</p>

           <div className="small-des-one">
            Synchronized is <br />
            a full-serivce creative <br />
            studio crafting <br />
            unparalleled digital <br />
            experiences.
           </div>
           <div className="small-para-one">
            We provide our partners with <br />
            exceptional digital solutions that <br />
            bring strategio value and make <br />
            their businesses thrive.
           </div>
          </motion.h1>
        </div>
      </TitleWrapper>
      <Container
       data-scroll
       data-scroll-delay=".15"
       data-scroll-speed="1">
    
        <img src={icon} alt="" className="logo" />
      </Container>
      <RightContainer>
        <div className="navlinks">
          <ul>
            <li><a href="https://www.instagram.com/chaniru.lk/">Home</a></li>
            <li><a href="https://www.instagram.com/chaniru.lk/">work</a></li>
            <li><a href="https://www.instagram.com/chaniru.lk/">recognition</a></li>
            <li><a href="https://www.instagram.com/chaniru.lk/">contact us</a></li>
            <br/>
            <li><a href="https://www.instagram.com/chaniru.lk/">archive &#x2198;</a></li>
          </ul>
        </div>
      </RightContainer>
    </SectionWrapper>
  );
};

export default CoverVideo;
