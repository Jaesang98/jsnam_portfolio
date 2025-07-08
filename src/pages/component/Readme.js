import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../../assets/css/swiper.scss";

import Description from "../../assets/img/Description.png";
import Skill from "../../assets/img/Skill.png";
import Feature from "../../assets/img/Feature.png";
import Role from "../../assets/img/Role.png";
import Feel from "../../assets/img/Feel.png";
import ProjectImage from "../../assets/img/ProjectImage.png";
import Solution from "../../assets/img/Solution.png";
import End from "../../assets/img/End.png";
import projectDetails from "../../data/projectDetails";

import { useState } from "react";

function Readme({ projectId, closeReadme }) {
  const projectDetail = projectDetails.find(
    (item) => item.prDetail_id === projectId
  );
  const [imgShow, setImgShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  function ImageFull(image) {
    setSelectedImage(image);
    setImgShow(true);
  }

  function closeImageFull() {
    setImgShow(false);
  }

  return (
    <div className="Readme-overlay">
      <div className="Readme-container">
        {!imgShow ? (
          <>
            <div className="Readme-head">
              <button className="Readme-close-button" onClick={closeReadme}>
                &times;
              </button>
            </div>
            <h2 className="Readme-title">{projectDetail.prDetail_title}</h2>
            <p className="Readme-date">
              진행 날짜: {projectDetail.prDetail_date}
            </p>

            <div className="Readme-description">
              <h3>
                <img
                  src={Description}
                  alt="Description Icon"
                  className="Readme-icon"
                />
                프로젝트 설명
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: projectDetail.prDetail_description,
                }}
              />
            </div>

            <div className="Readme-tech-stack">
              <h3>
                <img
                  src={Skill}
                  alt="Tech Stack Icon"
                  className="Readme-icon"
                />
                사용한 언어/프레임워크
              </h3>
              <div className="Readme-language-content">
                {projectDetail.prDetail_techStack.map((item, idx) => (
                  <p className="Readme-language">{item}</p>
                ))}
              </div>
            </div>

            <div className="Readme-role">
              <h3>
                <img src={Role} alt="Role Icon" className="Readme-icon" />
                역할 및 기여도
              </h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: projectDetail.prDetail_role,
                }}
              ></p>
            </div>

            <div className="Readme-features">
              <h3>
                <img
                  src={Feature}
                  alt="Features Icon"
                  className="Readme-icon"
                />
                기술 구현
              </h3>
              <ul>
                {projectDetail.prDetail_features.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </div>

            <div className="Readme-image">
              <h3>
                <img
                  src={ProjectImage}
                  alt="Image Icon"
                  className="Readme-icon"
                />
                프로젝트 이미지
              </h3>

              {projectDetail.prDetail_images.length === 0 ? (
                <div className="Readme-image-placeholder">이미지 추가 예정</div>
              ) : (
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={30}
                  pagination={{ clickable: true }}
                  navigation
                >
                  {projectDetail.prDetail_images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={image}
                        alt={`Project Image ${index + 1}`}
                        className="Readme-project-image"
                        // onClick={() => ImageFull(image)}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>

            <div className="Readme-features">
              <h3>
                <img
                  src={Feel}
                  alt="Reflections Icon"
                  className="Readme-icon"
                />
                주요 기능
              </h3>
              <ul>
                {projectDetail.prDetail_reflections.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              {/* <p>{projectDetail.prDetail_reflections}</p> */}
            </div>

            <div className="Readme-features">
              <h3>
                <img
                  src={Solution}
                  alt="Challenges Icon"
                  className="Readme-icon"
                />
                문제점과 해결 방안
              </h3>
              <br></br>
              <ul>
                <strong>문제점:</strong>
                {projectDetail.prDetail_challenges.problem.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              <br></br>
              <ul>
                <strong>해결 방안:</strong>
                {projectDetail.prDetail_challenges.solution.map((item, idx) => (
                  <li key={idx} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
              {/* <p>
                <strong>문제점:</strong>{" "}
                {projectDetail.prDetail_challenges.problem}
                <br />
                <br />
                <strong>해결 방안:</strong>{" "}
                {projectDetail.prDetail_challenges.solution}
              </p> */}
            </div>

            <div className="Readme-outcomes">
              <h3>
                <img src={End} alt="Outcomes Icon" className="Readme-icon" />
                결과 및 성과
              </h3>
              <p>{projectDetail.prDetail_outcomes}</p>
            </div>

            <div className="Readme-link">
              {projectDetail.prDetail_links.projectLink ? (
                <a
                  href={projectDetail.prDetail_links.projectLink}
                  target="_blank"
                  className="Readme-demo-link mr10"
                >
                  프로젝트 보기
                </a>
              ) : (
                ""
              )}

              {projectDetail.prDetail_links.githubLink ? (
                <a
                  href={projectDetail.prDetail_links.githubLink}
                  target="_blank"
                  className="Readme-demo-link"
                >
                  깃허브 보기
                </a>
              ) : (
                ""
              )}
            </div>
          </>
        ) : (
          <div className="Readme-imgArea" onClick={closeImageFull}>
            <button className="Readme-imageClose-button">&times;</button>
            <img src={selectedImage} alt="Full Size" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Readme;
