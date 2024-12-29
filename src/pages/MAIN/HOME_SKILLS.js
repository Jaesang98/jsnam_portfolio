import iconJS from "../../assets/img/iconJS.png";
import iconTS from "../../assets/img/iconTS.png";
import iconHTML from "../../assets/img/iconHTML.png";
import iconCSS from "../../assets/img/iconCSS.png";
import iconSASS from "../../assets/img/iconSASS.png";
import iconJQUERY from "../../assets/img/iconJQUERY.png";
import iconVUE from "../../assets/img/iconVUE.png";
import iconREACT from "../../assets/img/iconREACT.png";
import iconGIT from "../../assets/img/iconGIT.png";
import iconJava from "../../assets/img/iconJava.png";
import iconSpringBoot from "../../assets/img/iconSpringBoot.png";

function HOME_SKILLS() {
  return (
    <div className="skills-container">
      <div className="skills-title">
        <h1 className="">SKILLS!</h1>
      </div>

      <div className="skills-list">
        <div className="skills-content">
          <div className="skills-category">Language</div>
          <ul className="skills-items">
            <li>
              <img src={iconJS} alt="JavaScript" />
              <span>JavaScript</span>
            </li>
            <li>
              <img src={iconTS} alt="TypeScript" />
              <span>TypeScript</span>
            </li>
          </ul>
        </div>

        <div className="skills-content">
          <div className="skills-category">Front-End</div>
          <ul className="skills-items">
            <li>
              <img src={iconJQUERY} alt="jQuery" />
              <span>jQuery</span>
            </li>
            <li>
              <img src={iconVUE} alt="Vue.js" />
              <span>Vue.js</span>
            </li>
            <li>
              <img src={iconREACT} alt="React" />
              <span>React</span>
            </li>
            <li>
              <img src={iconHTML} alt="HTML" />
              <span>HTML</span>
            </li>
            <li>
              <img src={iconCSS} alt="CSS" />
              <span>CSS</span>
            </li>
            <li>
              <img src={iconSASS} alt="SASS" />
              <span>SASS</span>
            </li>
          </ul>
        </div>

        <div className="skills-content">
          <div className="skills-category">Back-End</div>
          <ul className="skills-items">
            <li>
              <img src={iconJava} alt="Java" />
              <span>Java</span>
            </li>
            <li>
              <img src={iconSpringBoot} alt="Spring Boot" />
              <span>Spring Boot</span>
            </li>
          </ul>
        </div>

        <div className="skills-content">
          <div className="skills-category">Cooperation</div>
          <ul className="skills-items">
            <li>
              <img src={iconGIT} alt="Git" />
              <span>Git</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HOME_SKILLS;
