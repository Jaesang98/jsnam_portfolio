// Delulu
import delulu_poster from "../assets/img/delulu/delulu_poster.png";
import delulu_ai from "../assets/img/delulu/delulu_ai.png";
import delulu_bot from "../assets/img/delulu/delulu_bot.png";
import delulu_chat from "../assets/img/delulu/delulu_chat.png";
import delulu_chatList from "../assets/img/delulu/delulu_chatList.png";
import delulu_home from "../assets/img/delulu/delulu_home.png";
import delulu_profile from "../assets/img/delulu/delulu_profile.png";
import delulu_yg from "../assets/img/delulu/delulu_yg.png";

//JS-Developer
import jsdev_main from "../assets/img/jsdev/jsdev_main.png";
import jsdev_dict from "../assets/img/jsdev/jsdev_dict.png";
import jsdev_dictList from "../assets/img/jsdev/jsdev_dictList.png";
import jsdev_edit from "../assets/img/jsdev/jsdev_edit.png";
import jsdev_guide from "../assets/img/jsdev/jsdev_guide.png";
import jsdev_login from "../assets/img/jsdev/jsdev_login.png";

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
      "웹소설 속 주인공이나 실제 연예인과 <strong>AI를 통해 대화</strong>할 수 있는 체험형 <strong>채팅 플랫폼</strong>입니다.<br> 원하는 인물과의 몰입감 있는 소통을 통해 팬심을 충족시키고, 새로운 즐거움을 제공합니다",
    prDetail_techStack: [
      "NextJS",
      "TypeScript",
      "Tailwind",
      "Zustand",
      "React Query",
    ],
    prDetail_features: [
      "<strong>NextJS, TypeScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>배달의민족 Frontend</strong> 아키텍처를 참고한 레이어 기반 디렉토리 구조 설계",
      "<strong>React Query</strong>를 활용한 서버 상태 관리 및 API 통신 최적화",
      "<strong>Zustand</strong>로 전역 상태를 간결하고 효율적으로 관리",
      "<strong>Tailwind</strong>를 활용해 빠른 UI 구성과 일관된 스타일링을 구현",
      "<strong>GitHub</strong>와 <strong>AWS</strong> 연동을 통한 자동 배포 환경(CI/CD) 구축",
    ],
    prDetail_role: "UI구성 및 프론트엔드개발 <br> 기여도: 20%",
    prDetail_reflections: [
      "<strong>채팅</strong>, <strong>프로필</strong>, <strong>유저 노트</strong> 등 주요 기능 화면의 UI를 직접 개발하며 화면 구성과 사용자 흐름을 설계했습니다.",
      "<strong>Socket.IO</strong>를 활용해 실시간 채팅 기능을 구현하고, 연결 및 수신 이벤트에 대한 예외 처리를 경험했습니다.",
      "<strong>무한 스크롤</strong> 및 <strong>iOS Safari</strong> 환경에서 발생하는 스크롤/UI 버그를 분기 처리하며 <strong>기기별 대응</strong> 역량을 향상시켰습니다.",
    ],
    prDetail_images: [
      delulu_poster,
      delulu_home,
      delulu_chatList,
      delulu_chat,
      delulu_ai,
      delulu_profile,
      delulu_yg,
    ],
    prDetail_challenges: {
      problem: [
        "<strong>iOS Safari</strong>에서 입력창 포커스 시 하단에 불필요한 여백이 생기고, 사용자가 입력 중 화면을 스크롤하면 레이아웃이 어긋나는 문제가 발생했습니다.",
        "<strong>무한 스크롤</strong> 구현 과정에서 사용자가 상단에 도달했을 때 전체 데이터를 요청하면서 <strong>로딩 지연</strong>이 발생했습니다.",
      ],
      solution: [
        "사용자가 입력 중 <strong>다른 영역을 터치하거나 스크롤</strong>하는 경우 자동으로 <strong>focus를 해제</strong>하여 키보드가 자연스럽게 닫히고, <strong>레이아웃이 깨지지 않도록 처리</strong>했습니다.",
        "스크롤이 <strong>상단 70%</strong> 이상 도달하면 미리 데이터를 <strong>사전 요청</strong>하여 실제 도달 시에는 <strong>지연 없이 콘텐츠가 렌더링</strong>되도록 개선했습니다.",
      ],
    },
    prDetail_outcomes:
      "정부 지원금 <strong>3,000만 원</strong>을 확보한 프로젝트로, 현재 기획자가 <strong>미국 현지에서 홍보</strong>를 진행 중입니다.<br> <strong>외국 사용자들의 반응도 긍정적</strong>이며, 글로벌 서비스 확장 가능성을 확인했습니다.",

    prDetail_links: {
      projectLink: "https://delulu.ohrora.org/en/",
      // githubLink: "https://github.com/JTH-00/ReadMe_Preset",
    },
  },
  {
    prDetail_id: "2",
    prDetail_team: "S",
    prDetail_title: "JS-Developer",
    prDetail_date: "2025.04 ~ 2025.06",
    prDetail_description:
      "개발 중 자주 마주치는 이슈나 반복되는 작업들을 정리한 개인 개발 위키입니다.",
    prDetail_techStack: [
      "React",
      "TypeScript",
      "SASS",
      "Zustand",
      "React Query",
      "Java",
      "SpringBoot",
      "JPA",
    ],
    prDetail_features: [
      "<strong>React, TypeScript</strong> 기반의 웹 애플리케이션 개발 및 UI 구성",
      "<strong>Spring Boot</strong> 기반의 서버 개발 및 <strong>JPA</strong>를 활용한 데이터 처리",
      "<strong>JWT</strong>를 이용한 로그인 및 인증 토큰 시스템 구현",
      "<strong>React Query</strong>를 활용한 서버 상태 관리 및 API 통신 최적화",
      "<strong>Zustand</strong>로 전역 상태를 간결하고 효율적으로 관리",
      "<strong>SASS</strong>를 사용하여 스타일을 <strong>Module</strong> 단위로 관리",
      "Prettier와 ESLint를 사용하여 코드 스타일 자동화 및 일관성 유지",
    ],
    prDetail_role: "UI구성 및 프론트엔드 백엔드개발",
    prDetail_reflections: [
      "<strong>JWT</strong> 인증 구조를 설계하고 AccessToken, RefreshToken 및 재발급 시스템 구현",
      "403 오류 발생 시 <strong>자동 로그아웃</strong> 로직 구성 (로컬 스토리지 기반 토큰 관리)",
      "하나의 테이블로 <strong>대-중-소 메뉴</strong> 구조를 설계하고, 이를 트리 형태로 렌더링",
      "<strong>Markdown</strong> 라이브러리를 적용하여 위키 문서 스타일 구현",
    ],
    prDetail_images: [
      jsdev_main,
      jsdev_login,
      jsdev_guide,
      jsdev_dictList,
      jsdev_dict,
      jsdev_edit,
    ],
    prDetail_challenges: {
      problem: [
        "디자이너와 협의 부족으로 다크모드가 라이트모드와 대칭되지 않아, 각 셀렉터별로 다크모드 대응 필요",
        "ERD 설계 후 구조적 오류로 인해 반복적인 수정 발생",
        "AccessToken 처리 시 <strong>MemberDetails 커스터마이징</strong>이 적용이 되었으나, <strong>RefreshToken</strong>에서는 사용자 정보 커스터마이징이 되지 않았음",
      ],
      solution: [
        "<strong>SCSS mixins</strong>과 <strong>functions</strong>을 활용해 다크모드 구현 최소화",
        "백엔드 개발자 피드백을 받아 메뉴 통합 및 정합성 개선",
        "<strong>Filter</strong>에서 RefreshToken 수신 시 <strong>MemberRepository</strong>를 통해 사용자 정보 커스터마이징",
      ],
    },
    prDetail_outcomes:
      "<strong>프론트와 백엔드 전반</strong>을 직접 구현하며 인증/인가 구조 설계, UI 구성, 데이터 구조 등 다양한 실무 흐름을 경험할 수 있었고, 마크다운 기반의 개발 문서 체계를 직접 설계하여 위키 중심의 개발 문화를 적용했습니다.",

    prDetail_links: {
      // projectLink: "https://digging-musing.site/",
      githubLink: "https://github.com/Jaesang98/JS-Developer",
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
