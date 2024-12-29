import CAREER_LOGO from "../../assets/img/CAREER_LOGO.gif";

function HOME_CAREER() {
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
            <span className="career-date">2022.08 ~ 2024.12</span>
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
              초기에는 JavaScript와 jQuery를 사용했으나, 2024년부터는 Vue.js와
              TypeScript를 도입하여 프로젝트를 개발하고 있습니다.
            </p>
            <p className="mt15">
              자사 및 외부 고객의 2개 프로젝트를 유지보수하고, 5개의 신규
              프로젝트를 성공적으로 개발했습니다.
            </p>
            <p className="mt15">
              고객과의 직접적인 소통을 통해 요구사항을 명확히 하고, 프로젝트를
              구체화하여 최적의 솔루션을 제공했습니다.
            </p>
            <p className="mt15">
              다양한 기술 스택을 적용하며 성능 최적화 및 사용자 경험 향상에
              기여했습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME_CAREER;
