import styled from 'styled-components';  
import cover01 from "../../assets/image/post11.png"
import cover02 from "../../assets/image/post10.png"
import cover03 from "../../assets/image/post02.png"
import cover04 from "../../assets/image/post03.png"
import cover05 from "../../assets/image/post04.png"
import "./new.css"; 

const SectionWrapper = styled.section`
  min-height: 600vh;
  width: 100vw;
  position: relative; 
  display: flex;
  margin: 0 auto; 

`;

 

const LeftContainer = styled.div` 
  position: absolute; 
`; 
 
const Third = () => {
  return (
    <SectionWrapper>
      

      <LeftContainer
        data-scroll
        data-scroll-delay=".15"
        data-scroll-speed="1"
      >
        <div className="slide-cover-one" data-scroll>
        <img src={cover01} alt="" className="cover-one" />
        <p className="cover-num-one">1</p>
        <p className="cover-title-one">
          Playful <br />
          &nbsp; Collective
        </p>
        <p className="cover-des-one">
          folio website for playful creative <br/>
          collective that specializes in art direction <br/>
          &amp; moving picture campaigns merging live <br/>
          action with cgi &amp; new technologies  
        </p>
        </div> 
        <div className="slide-cover-two" data-scroll>
        <img src={cover02} alt="" className="cover-one" />
        <p className="cover-num-one">2</p>
        <p className="cover-title-one">
          Kati <br />
          &nbsp; Forner
        </p>
        <p className="cover-des-one">
          folio website for playful creative <br/>
          collective that specializes in art direction <br/>
          &amp; moving picture campaigns merging live <br/>
          action with cgi &amp; new technologies  
        </p>
        </div><div className="slide-cover-three" data-scroll>
        <img src={cover03} alt="" className="cover-one" />
        <p className="cover-num-one">3</p>
        <p className="cover-title-one">
          Limina
        </p>
        <p className="cover-des-one">
          folio website for playful creative <br/>
          collective that specializes in art direction <br/>
          &amp; moving picture campaigns merging live <br/>
          action with cgi &amp; new technologies  
        </p>
        </div> 
        <div className="slide-cover-four" data-scroll>
        <img src={cover04} alt="" className="cover-one" />
        <p className="cover-num-one">4</p>
        <p className="cover-title-one">
          @chaniru.lk
        </p>
        <p className="cover-des-one">
          folio website for playful creative <br/>
          collective that specializes in art direction <br/>
          &amp; moving picture campaigns merging live <br/>
          action with cgi &amp; new technologies  
        </p>
        </div>
        <div className="slide-cover-five" data-scroll>
        <img src={cover05} alt="" className="cover-one" />
        <p className="cover-num-one">5</p>
        <p className="cover-title-one">
          Rafar <br />
          &nbsp;&nbsp;Bojar
        </p>
        <p className="cover-des-one">
          folio website for playful creative <br/>
          collective that specializes in art direction <br/>
          &amp; moving picture campaigns merging live <br/>
          action with cgi &amp; new technologies  
        </p>
        </div>
      </LeftContainer>  
    </SectionWrapper>
  );
};

export default Third;
