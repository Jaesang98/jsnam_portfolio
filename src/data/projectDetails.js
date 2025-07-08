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
    prDetail_team: "T",
    prDetail_title: "Delulu",
    prDetail_date: "2025.06 ~ 2025.07",
    prDetail_description:
      "웹소설 주인공이나 연예인과 AI 채팅이 가능한 플랫폼입니다.",
    prDetail_techStack: [
      "React",
      "TypeScript",
      "Emotion",
      "Zustand",
      "React Query",
    ],
    prDetail_features: [
      "<strong>React, TypeScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>FSD(Folder Structure Driven)</strong> 방식의 디렉토리 구조 설계",
      "<strong>React Query</strong>를 활용한 서버 상태 관리 및 API 통신 최적화",
      "<strong>Zustand</strong>로 전역 상태를 간결하고 효율적으로 관리",
      "<strong>Emotion</strong>을 사용하여 컴포넌트 단위 스타일링",
      "<strong>GitHub Actions</strong> 기반의 CI 구성 및 Vercel 연동을 통한 자동 배포 환경(CI/CD) 구축",
      "<strong>Docker</strong> 컨테이너 기반의 백엔드 API와 통신하며 개발 환경 구성",
    ],
    prDetail_role:
      "UI구성 및 프론트엔드개발 <br> <strong>공통 컴포넌트</strong> 개발 <br> 기여도: 25%",
    prDetail_reflections: [
      "<strong>홈 화면</strong>, <strong>플레이리스트</strong>, <strong>게시글</strong> 등 주요 화면 UI를 직접 개발했습니다.",
      "<strong>Button</strong>, <strong>Modal</strong>, <strong>Pagination</strong>, <strong>Tag</strong> 등 다양한 공통 컴포넌트를 직접 설계하고 구현했습니다.",
      "<strong>Google Login</strong> 연동 후, <strong>Access Token</strong>, <strong>Refresh Token</strong>, <strong>Token Reissue</strong> 기능을 <strong>Axios Interceptor</strong>를 통해 처리했습니다.",
    ],
    prDetail_images: [
      musing_main1,
      musing_main2,
      musing_playlist,
      musing_post,
      musing_service,
    ],
    prDetail_challenges: {
      problem: [
        "초기에는 <strong>FSD(Folder Structure Driven)</strong> 구조가 다소 복잡하게 느껴졌습니다.",
        "보통은 <strong>규모가 큰 프로젝트에서 사용하는 방식</strong>이라, 상대적으로 작은 규모의 프로젝트에 적용하니 오히려 <strong>구조가 과하게</strong> 느껴졌습니다.",
      ],
      solution: [
        "하지만 프로젝트를 진행하면서 점차 <strong>FSD 구조에 익숙</strong>해졌고, 디렉토리 간 <strong>역할을 명확히 나누는 데</strong>에 큰 도움이 되었습니다.",
        "현재는 <strong>유지보수성과 확장성</strong> 측면에서 FSD 구조의 장점을 체감하고 있습니다.",
      ],
    },
    prDetail_outcomes:
      "FSD 구조 적용을 통해 디렉토리 체계를 정리하고, 공통 컴포넌트 도입으로 코드 재사용성과 유지보수성을 크게 향상시켰습니다.",

    prDetail_links: {
      projectLink: "https://digging-musing.site/",
      githubLink: "https://github.com/JTH-00/ReadMe_Preset",
    },
  },
  {
    prDetail_id: "2",
    prDetail_team: "S",
    prDetail_title: "JS-Developer",
    prDetail_date: "2025.03 ~ 2025.06",
    prDetail_description:
      "개발 중 자주 마주치는 이슈나 반복되는 작업들을 정리한 개인 개발 위키입니다.",
    prDetail_techStack: [
      "React",
      "TypeScript",
      "Emotion",
      "Zustand",
      "React Query",
    ],
    prDetail_features: [
      "<strong>React, TypeScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>FSD(Folder Structure Driven)</strong> 방식의 디렉토리 구조 설계",
      "<strong>React Query</strong>를 활용한 서버 상태 관리 및 API 통신 최적화",
      "<strong>Zustand</strong>로 전역 상태를 간결하고 효율적으로 관리",
      "<strong>Emotion</strong>을 사용하여 컴포넌트 단위 스타일링",
      "<strong>GitHub Actions</strong> 기반의 CI 구성 및 Vercel 연동을 통한 자동 배포 환경(CI/CD) 구축",
      "<strong>Docker</strong> 컨테이너 기반의 백엔드 API와 통신하며 개발 환경 구성",
    ],
    prDetail_role:
      "UI구성 및 프론트엔드개발 <br> <strong>공통 컴포넌트</strong> 개발 <br> 기여도: 25%",
    prDetail_reflections: [
      "<strong>홈 화면</strong>, <strong>플레이리스트</strong>, <strong>게시글</strong> 등 주요 화면 UI를 직접 개발했습니다.",
      "<strong>Button</strong>, <strong>Modal</strong>, <strong>Pagination</strong>, <strong>Tag</strong> 등 다양한 공통 컴포넌트를 직접 설계하고 구현했습니다.",
      "<strong>Google Login</strong> 연동 후, <strong>Access Token</strong>, <strong>Refresh Token</strong>, <strong>Token Reissue</strong> 기능을 <strong>Axios Interceptor</strong>를 통해 처리했습니다.",
    ],
    prDetail_images: [
      musing_main1,
      musing_main2,
      musing_playlist,
      musing_post,
      musing_service,
    ],
    prDetail_challenges: {
      problem: [
        "초기에는 <strong>FSD(Folder Structure Driven)</strong> 구조가 다소 복잡하게 느껴졌습니다.",
        "보통은 <strong>규모가 큰 프로젝트에서 사용하는 방식</strong>이라, 상대적으로 작은 규모의 프로젝트에 적용하니 오히려 <strong>구조가 과하게</strong> 느껴졌습니다.",
      ],
      solution: [
        "하지만 프로젝트를 진행하면서 점차 <strong>FSD 구조에 익숙</strong>해졌고, 디렉토리 간 <strong>역할을 명확히 나누는 데</strong>에 큰 도움이 되었습니다.",
        "현재는 <strong>유지보수성과 확장성</strong> 측면에서 FSD 구조의 장점을 체감하고 있습니다.",
      ],
    },
    prDetail_outcomes:
      "FSD 구조 적용을 통해 디렉토리 체계를 정리하고, 공통 컴포넌트 도입으로 코드 재사용성과 유지보수성을 크게 향상시켰습니다.",

    prDetail_links: {
      projectLink: "https://digging-musing.site/",
      githubLink: "https://github.com/JTH-00/ReadMe_Preset",
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
      "<strong>React, TypeScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>FSD(Folder Structure Driven)</strong> 방식의 디렉토리 구조 설계",
      "<strong>React Query</strong>를 활용한 서버 상태 관리 및 API 통신 최적화",
      "<strong>Zustand</strong>로 전역 상태를 간결하고 효율적으로 관리",
      "<strong>Emotion</strong>을 사용하여 컴포넌트 단위 스타일링",
      "<strong>GitHub Actions</strong> 기반의 CI 구성 및 Vercel 연동을 통한 자동 배포 환경(CI/CD) 구축",
      "<strong>Docker</strong> 컨테이너 기반의 백엔드 API와 통신하며 개발 환경 구성",
    ],
    prDetail_role:
      "UI구성 및 프론트엔드개발 <br> <strong>공통 컴포넌트</strong> 개발 <br> 기여도: 25%",
    prDetail_reflections: [
      "<strong>홈 화면</strong>, <strong>플레이리스트</strong>, <strong>게시글</strong> 등 주요 화면 UI를 직접 개발했습니다.",
      "<strong>Button</strong>, <strong>Modal</strong>, <strong>Pagination</strong>, <strong>Tag</strong> 등 다양한 공통 컴포넌트를 직접 설계하고 구현했습니다.",
      "<strong>Google Login</strong> 연동 후, <strong>Access Token</strong>, <strong>Refresh Token</strong>, <strong>Token Reissue</strong> 기능을 <strong>Axios Interceptor</strong>를 통해 처리했습니다.",
    ],
    prDetail_images: [
      musing_main1,
      musing_main2,
      musing_playlist,
      musing_post,
      musing_service,
    ],
    prDetail_challenges: {
      problem: [
        "초기에는 <strong>FSD(Folder Structure Driven)</strong> 구조가 다소 복잡하게 느껴졌습니다.",
        "보통은 <strong>규모가 큰 프로젝트에서 사용하는 방식</strong>이라, 상대적으로 작은 규모의 프로젝트에 적용하니 오히려 <strong>구조가 과하게</strong> 느껴졌습니다.",
      ],
      solution: [
        "하지만 프로젝트를 진행하면서 점차 <strong>FSD 구조에 익숙</strong>해졌고, 디렉토리 간 <strong>역할을 명확히 나누는 데</strong>에 큰 도움이 되었습니다.",
        "현재는 <strong>유지보수성과 확장성</strong> 측면에서 FSD 구조의 장점을 체감하고 있습니다.",
      ],
    },
    prDetail_outcomes:
      "FSD 구조 적용을 통해 디렉토리 체계를 정리하고, 공통 컴포넌트 도입으로 코드 재사용성과 유지보수성을 크게 향상시켰습니다.",

    prDetail_links: {
      projectLink: "https://digging-musing.site/",
      githubLink: "https://github.com/JTH-00/ReadMe_Preset",
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
      "<strong>React, JavaScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>SASS</strong>을 사용하여 컴포넌트 단위 스타일링",
      "<strong>Vercel</strong> 연동을 통한 자동 배포 환경(CI/CD) 구축",
    ],
    prDetail_role:
      "기획 및 디자인, 화면 퍼블리싱, 프론트엔드 전 페이지 및 공통 기능 개발",
    prDetail_reflections: [
      "데스크톱 모바일 테블릿 <strong>반응협</strong> 웹",
      "소개, Skills, 커리어, 프로젝트, 교육 순으로 확인가능",
      "각 프로젝트의 상세 설명과 gitHub,배포링크 등 확인 가능",
    ],
    prDetail_images: [port_profile, port_skills, port_career, port_modal],
    prDetail_challenges: {
      problem: [
        "UI 구성 및 구조를 어떻게 설계할지에 대해 많은 고민이 필요했고, 전체적인 디자인 작업이 특히 어려웠습니다.",
      ],
      solution: [
        "다양한 포트폴리오 사이트를 참고하고 주변 사람들의 피드백을 반영하며 여러 차례 설계를 수정했습니다. 시간이 다소 걸렸지만, 결국 무사히 완성할 수 있었습니다.",
      ],
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
