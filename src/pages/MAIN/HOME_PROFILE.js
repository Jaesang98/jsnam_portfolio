import profileImg from "../../assets/img/profileImg1.jpg";
import Header from "../component/Header";

function HOME_PROFILE({ scrollToElement }) {
  return (
    <div className="profile-container">
      <div className="profile-background">
        <Header scrollToElement={scrollToElement}></Header>
        <div>
          <h1 className="profile-maintxt">Port-Folio</h1>
          <h3 className="profile-explan">
            <strong>열정과 노력</strong>으로 성장하는 개발자{" "}
            <strong>남재상</strong>입니다!
          </h3>
        </div>

        <div className="profile-content">
          <div className="profile-text-container">
            <p className="profile-text mb15" onClick={() => scrollToElement(1)}>
              ABOUT ME
            </p>
            <p className="profile-text mb15" onClick={() => scrollToElement(2)}>
              SKILLS
            </p>
            <p className="profile-text mb15" onClick={() => scrollToElement(3)}>
              CAREER
            </p>
            <p className="profile-text mb15" onClick={() => scrollToElement(4)}>
              PROJECT
            </p>
            <p className="profile-text mb15" onClick={() => scrollToElement(5)}>
              EDUCATION
            </p>
          </div>
          <div className="profile-img-container">
            {/* <img className='port-profileImg' src="https://jieun-portfolio.vercel.app/assets/jieun_img-2a868348.webp" alt="Profile" /> */}
            <img
              className="profile-profileImg"
              src={profileImg}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HOME_PROFILE;
