import CAREER_LOGO from "../../assets/img/CAREER_LOGO.gif";
import iconVue from "../../assets/img/iconVUE.png";
import iconJQUERY from "../../assets/img/iconJQUERY.png";
import iconJS from "../../assets/img/iconJS.png";
import iconTS from "../../assets/img/iconTS.png";

function HOME_CAREER() {
  const techIcons = [
    { src: iconJS, alt: "JavaScript" },
    { src: iconTS, alt: "TypeScript" },
    { src: iconVue, alt: "Vue" },
    { src: iconJQUERY, alt: "jQuery" },
  ];

  return (
    <div className="career-container">
      <div className="career-title">
        <h1 className="">CAREER!</h1>
      </div>

      <div className="career">
        <div className="career-contents">
          <div className="career-header">
            <img className="career-logo" src={CAREER_LOGO}></img>
            <div className="career-name">(주)모빌씨앤씨</div>
            <span className="career-date">2022.08 ~ 2025.02</span>
          </div>

          <div className="career-content">
            <p>
              모빌씨앤씨는 다양한 모바일 솔루션과 서비스를 제공하는 IT
              기업입니다.
            </p>
            <p className="mt15">
              주로 장기간 외근을 나가 SI 프로젝트를 진행하였습니다.
            </p>
            <p className="mt15">
              JavaScript와 TypeScript를 기반으로 개발하며, 프로젝트에 따라
              jQuery와 Vue.js를 적절히 활용해 왔습니다.
            </p>
            <p className="mt15">
              자사 및 외부 고객의 프로젝트 2건을 유지보수하고, 신규 프로젝트
              5건을 성공적으로 개발했습니다.
            </p>
            <p className="mt15">
              고객과의 직접 소통을 통해 요구사항을 명확히 파악하고, 이를
              바탕으로 최적의 솔루션을 구현했습니다.
            </p>
            <div className="project-language">
              {techIcons.map((icon, index) => (
                <img
                  key={index}
                  src={icon.src}
                  alt={icon.alt}
                  title={icon.alt}
                  className="career" // 여기 붙이기
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME_CAREER;
