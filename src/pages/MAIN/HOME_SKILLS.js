import iconJS from "../../assets/img/iconJS.png";
import iconTS from "../../assets/img/iconTS.png";
// import iconHTML from "../../assets/img/iconHTML.png";
// import iconCSS from "../../assets/img/iconCSS.png";
import iconSASS from "../../assets/img/iconSASS.png";
import iconJQUERY from "../../assets/img/iconJQUERY.png";
import iconVUE from "../../assets/img/iconVUE.png";
import iconREACT from "../../assets/img/iconREACT.png";
import iconGIT from "../../assets/img/iconGIT.png";
import iconJava from "../../assets/img/iconJava.png";
import iconSpringBoot from "../../assets/img/iconSpringBoot.png";
import iconEmotion from "../../assets/img/iconEmotion.png";
import iconBootStrap from "../../assets/img/iconBootStrap.png";
import iconNext from "../../assets/img/iconNext.png";
import iconTailwind from "../../assets/img/iconTailwind.png";
import iconSVN from "../../assets/img/iconSVN.png";
import iconNotion from "../../assets/img/iconNotion.png";
import iconDiscord from "../../assets/img/iconDiscord.png";

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
            <li>
              <img src={iconJava} alt="Java" />
              <span>Java</span>
            </li>
          </ul>
        </div>

        <div className="skills-content">
          <div className="skills-category">Front-End</div>
          <ul className="skills-items">
            <li>
              <img src={iconREACT} alt="React" />
              <span>React</span>
            </li>
            <li>
              <img src={iconNext} alt="Nextjs" />
              <span>Nextjs</span>
            </li>
            <li>
              <img src={iconVUE} alt="Vue.js" />
              <span>Vue.js</span>
            </li>
            <li>
              <img src={iconJQUERY} alt="jQuery" />
              <span>jQuery</span>
            </li>
            {/* <li>
              <img src={iconHTML} alt="HTML" />
              <span>HTML</span>
            </li>
            <li>
              <img src={iconCSS} alt="CSS" />
              <span>CSS</span>
            </li> */}
            <li>
              <img src={iconTailwind} alt="SASS" />
              <span>Tailwind</span>
            </li>
            <li>
              <img src={iconSASS} alt="SASS" />
              <span>SASS</span>
            </li>
            <li>
              <img src={iconEmotion} alt="Emotion" />
              <span>Emotion</span>
            </li>
            <li>
              <img src={iconBootStrap} alt="BootStrap" />
              <span>BootStrap</span>
            </li>
          </ul>
        </div>

        <div className="skills-content">
          <div className="skills-category">Back-End</div>
          <ul className="skills-items">
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
            <li>
              <img src={iconSVN} alt="SVN" />
              <span>SVN</span>
            </li>
            <li>
              <img src={iconNotion} alt="Notion" />
              <span>Notion</span>
            </li>
            <li>
              <img src={iconDiscord} alt="Discord" />
              <span>Discord</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HOME_SKILLS;
