// musing
import musing_main1 from "../assets/img/musing/musing_main1.png";
import musing_main2 from "../assets/img/musing/musing_main2.png";
import musing_playlist from "../assets/img/musing/musing_playlist.png";
import musing_post from "../assets/img/musing/musing_post.png";
import musing_service from "../assets/img/musing/musing_service.png";

//portfolio
import port_profile from "../assets/img/port_profile2.png";
import port_skills from "../assets/img/port_skills.png";
import port_career from "../assets/img/port_career2.png";
import port_modal from "../assets/img/port_modal.png";

import chat4 from "../assets/img/chat4.png";

const projectDetails = [
  {
    prDetail_id: "1",
    prDetail_team: "S",
    prDetail_title: "포트폴리오",
    prDetail_date: "2024.10 ~ 2024.11",
    prDetail_description:
      "개인 포트폴리오 웹사이트를 제작하여 본인의 이력과 프로젝트를 시각적으로 표현한 웹사이트입니다",
    prDetail_techStack: "React, JavaScript, SCSS",
    prDetail_features: [
      "데스크톱 모바일 테블릿 반응협 웹",
      "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
      "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능",
    ],
    prDetail_role:
      "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections:
      "이전 프로젝트와 달리 디자인에 더욱 신경을 썼으며, React의 컴포넌트 구조를 최대한 활용하는 데 집중했습니다. 이를 통해 디자인 감각과 React 실력이 크게 향상되었습니다.",
    prDetail_images: [port_profile, port_skills, port_career, port_modal],
    prDetail_challenges: {
      problem:
        "디자인에 큰 어려움을 겪었고 퍼블리싱의 구조를 잡는데 시간이 오래걸렸습니다.",
      solution:
        "다양한 포트폴리오 사이트와 PPT 자료를 참고하여 퍼블리싱 구조를 설계했습니다. 시간이 다소 소요되었지만, 최종적으로 무사히 완성할 수 있었습니다.",
    },
    prDetail_outcomes:
      "포트폴리오 사이트를 통해 디자인과 개발 역량을 한층 더 발전시킬 수 있었습니다. React의 컴포넌트 구조와 퍼블리싱에 대한 이해가 깊어졌으며, 사용자 경험을 고려한 UI/UX 개선에도 성과를 보였습니다. 이 프로젝트를 통해 프론트엔드 기술의 전반적인 실력을 크게 향상시킬 수 있었습니다.",
    prDetail_links: {
      projectLink: "https://jsnam-portfolio.vercel.app/",
      githubLink: "https://github.com/Jaesang98/jsnam_portfolio",
    },
  },
  {
    prDetail_id: "2",
    prDetail_team: "S",
    prDetail_title: "포트폴리오",
    prDetail_date: "2024.10 ~ 2024.11",
    prDetail_description:
      "개인 포트폴리오 웹사이트를 제작하여 본인의 이력과 프로젝트를 시각적으로 표현한 웹사이트입니다",
    prDetail_techStack: "React, JavaScript, SCSS",
    prDetail_features: [
      "데스크톱 모바일 테블릿 반응협 웹",
      "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
      "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능",
    ],
    prDetail_role:
      "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections:
      "이전 프로젝트와 달리 디자인에 더욱 신경을 썼으며, React의 컴포넌트 구조를 최대한 활용하는 데 집중했습니다. 이를 통해 디자인 감각과 React 실력이 크게 향상되었습니다.",
    prDetail_images: [port_profile, port_skills, port_career, port_modal],
    prDetail_challenges: {
      problem:
        "디자인에 큰 어려움을 겪었고 퍼블리싱의 구조를 잡는데 시간이 오래걸렸습니다.",
      solution:
        "다양한 포트폴리오 사이트와 PPT 자료를 참고하여 퍼블리싱 구조를 설계했습니다. 시간이 다소 소요되었지만, 최종적으로 무사히 완성할 수 있었습니다.",
    },
    prDetail_outcomes:
      "포트폴리오 사이트를 통해 디자인과 개발 역량을 한층 더 발전시킬 수 있었습니다. React의 컴포넌트 구조와 퍼블리싱에 대한 이해가 깊어졌으며, 사용자 경험을 고려한 UI/UX 개선에도 성과를 보였습니다. 이 프로젝트를 통해 프론트엔드 기술의 전반적인 실력을 크게 향상시킬 수 있었습니다.",
    prDetail_links: {
      projectLink: "https://jsnam-portfolio.vercel.app/",
      githubLink: "https://github.com/Jaesang98/jsnam_portfolio",
    },
  },

  {
    prDetail_id: "3",
    prDetail_team: "S",
    prDetail_title: "Musing",
    prDetail_date: "2024.12 ~ 2025.06",
    prDetail_description:
      "서로 좋아하는 음악을 공유하고, <strong>나만의 플레이리스트</strong>를 보관하는 웹 사이트 입니다.",
    prDetail_techStack: [
      "React",
      "TypeScript",
      "Emotion",
      "Zustand",
      "React Query",
    ],
    prDetail_features: [
      "데스크톱 모바일 테블릿 반응협 웹",
      "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
      "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능",
    ],
    prDetail_role:
      "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections:
      "이전 프로젝트와 달리 디자인에 더욱 신경을 썼으며, React의 컴포넌트 구조를 최대한 활용하는 데 집중했습니다. 이를 통해 디자인 감각과 React 실력이 크게 향상되었습니다.",
    prDetail_images: [
      musing_main1,
      musing_main2,
      musing_playlist,
      musing_post,
      musing_service,
    ],
    prDetail_challenges: {
      problem:
        "디자인에 큰 어려움을 겪었고 퍼블리싱의 구조를 잡는데 시간이 오래걸렸습니다.",
      solution:
        "다양한 포트폴리오 사이트와 PPT 자료를 참고하여 퍼블리싱 구조를 설계했습니다. 시간이 다소 소요되었지만, 최종적으로 무사히 완성할 수 있었습니다.",
    },
    prDetail_outcomes:
      "포트폴리오 사이트를 통해 디자인과 개발 역량을 한층 더 발전시킬 수 있었습니다. React의 컴포넌트 구조와 퍼블리싱에 대한 이해가 깊어졌으며, 사용자 경험을 고려한 UI/UX 개선에도 성과를 보였습니다. 이 프로젝트를 통해 프론트엔드 기술의 전반적인 실력을 크게 향상시킬 수 있었습니다.",
    prDetail_links: {
      projectLink: "https://jsnam-portfolio.vercel.app/",
      githubLink: "https://github.com/Jaesang98/jsnam_portfolio",
    },
  },
  {
    prDetail_id: "4",
    prDetail_team: "S",
    prDetail_title: "포트폴리오",
    prDetail_date: "2024.10 ~ 2024.11",
    prDetail_description:
      "개인 포트폴리오 웹사이트를 제작하여 본인의 <strong>이력과 프로젝트</strong>를 시각적으로 표현한 웹사이트입니다",
    prDetail_techStack: ["React", "JavaScript", "SCSS"],
    prDetail_features: [
      "데스크톱 모바일 테블릿 반응협 웹",
      "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
      "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능",
    ],
    prDetail_role:
      "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections:
      "이전 프로젝트와 달리 디자인에 더욱 신경을 썼으며, React의 컴포넌트 구조를 최대한 활용하는 데 집중했습니다. 이를 통해 디자인 감각과 React 실력이 크게 향상되었습니다.",
    prDetail_images: [port_profile, port_skills, port_career, port_modal],
    prDetail_challenges: {
      problem:
        "디자인에 큰 어려움을 겪었고 퍼블리싱의 구조를 잡는데 시간이 오래걸렸습니다.",
      solution:
        "다양한 포트폴리오 사이트와 PPT 자료를 참고하여 퍼블리싱 구조를 설계했습니다. 시간이 다소 소요되었지만, 최종적으로 무사히 완성할 수 있었습니다.",
    },
    prDetail_outcomes:
      "포트폴리오 사이트를 통해 디자인과 개발 역량을 한층 더 발전시킬 수 있었습니다. React의 컴포넌트 구조와 퍼블리싱에 대한 이해가 깊어졌으며, 사용자 경험을 고려한 UI/UX 개선에도 성과를 보였습니다. 이 프로젝트를 통해 프론트엔드 기술의 전반적인 실력을 크게 향상시킬 수 있었습니다.",
    prDetail_links: {
      projectLink: "https://jsnam-portfolio.vercel.app/",
      githubLink: "https://github.com/Jaesang98/jsnam_portfolio",
    },
  },
];

export default projectDetails;
