import { useRef } from 'react';
import HOME_PROFILE from "./HOME_PROFILE";
import HOME_ABOUTME from "./HOME_ABOUTME";
import HOME_SKILLS from './HOME_SKILLS';
import HOME_CAREER from './HOME_CAREER'
import HOME_PROJECT from './HOME_PROJECT';
import HOME_EDUCATION from './HOME_EDUCATION';
import HOME_THANKYOU from './HOME_THANKYOU'
import ControlBtn from '../component/ControlBtn'
import '../../assets/css/global.scss'

function HOME_1000() {
  const elementRefs = useRef([]);
  function scrollToElement(index) {
    const element = elementRefs.current[index];
    const container = document.querySelector(".containerWrap");
    let offsetMargin = 80;
    if(window.innerWidth <= 640) {
      offsetMargin = 50
    }

    if (element && container) {
      container.scrollTo({
        top: element.offsetTop - offsetMargin,
        behavior: "smooth"
      });
    }
  }

  return (
    <div className='containerWrap'>
      <div ref={(el) => (elementRefs.current[0] = el)}><HOME_PROFILE scrollToElement={scrollToElement}/></div>

      <div ref={(el) => (elementRefs.current[1] = el)}><HOME_ABOUTME /></div>

      <div ref={(el) => (elementRefs.current[2] = el)}><HOME_SKILLS /></div>

      <div ref={(el) => (elementRefs.current[3] = el)}><HOME_CAREER /></div>

      <div ref={(el) => (elementRefs.current[4] = el)}><HOME_PROJECT /></div>

      <div ref={(el) => (elementRefs.current[5] = el)}><HOME_EDUCATION /></div>

      <div><HOME_THANKYOU /></div>
      
      <div><ControlBtn scrollToElement={scrollToElement}/></div>
    </div>
  );
}

export default HOME_1000;
